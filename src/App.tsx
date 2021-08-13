import { useCallback, useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";

import { Header } from "./components/Header/Header";
import { MessageList } from "./components/MessageList/MessageList";
import { Footer } from "./components/Footer/Footer";

import { Message } from "./types/Message";
import { GET_MESSAGES } from "./graphql/getMessages";
import { SEND_MESSAGE } from "./graphql/sendMessage";

const pageLimit = 20;

const variables = {
  offset: 0,
  limit: pageLimit,
  order_by: { id: "desc" },
};

function App() {
  const [paginationOffset, setPaginationOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const { data, error, fetchMore } = useQuery<{
    messages: Message[];
  }>(GET_MESSAGES, {
    variables,
    notifyOnNetworkStatusChange: true,
  });

  const [sendMessage] = useMutation(SEND_MESSAGE, {
    update: (proxy, { data: { insert_messages_one } }) => {
      const previousData = proxy.readQuery<{ messages: Message[] }>({
        query: GET_MESSAGES,
        variables,
      });

      proxy.writeQuery({
        query: GET_MESSAGES,
        variables,
        data: {
          messages: [
            ...(previousData ? previousData.messages : []),
            insert_messages_one,
          ],
        },
      });
    },
  });

  const loadMore = useCallback(() => {
    const offset = paginationOffset + pageLimit;
    setPaginationOffset(offset);

    fetchMore({
      variables: { ...variables, offset },
      updateQuery: (prev, { fetchMoreResult }) => {
        setHasMore(!!fetchMoreResult && fetchMoreResult.messages.length > 0);
        return Object.assign({}, prev, {
          messages: [
            ...prev.messages,
            ...(fetchMoreResult ? fetchMoreResult.messages : []),
          ],
        });
      },
    });
  }, [paginationOffset, fetchMore]);

  const onSend = useCallback(
    (message: string) => {
      const variables = {
        body: message,
        senderName: "Tomas",
      };

      sendMessage({
        variables,
        optimisticResponse: {
          insert_messages_one: {
            __typename: "messages",
            id: -1,
            ...variables,
          },
        },
      });
    },
    [sendMessage]
  );

  useEffect(() => {
    setHasMore(!!data && data.messages.length >= pageLimit);
  }, [data]);

  return (
    <div className="h-screen md:container mx-auto md:flex justify-center items-center">
      <div className="flex flex-col h-full md:h-auto my-auto_ md:w-1/2 lg:w-2/5 md:shadow-2xl md:rounded-xl">
        <Header />
        <MessageList
          messages={data?.messages || []}
          onLoadMore={loadMore}
          hasMore={hasMore}
          error={error?.message}
        />
        <Footer onSend={onSend} disabled={!!error} />
      </div>
    </div>
  );
}

export default App;
