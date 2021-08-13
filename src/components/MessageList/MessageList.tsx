import InfiniteScroll from "react-infinite-scroll-component";

import { Message } from "../../types/Message";
import { MessageItem } from "../MessageItem/MessageItem";

type MessageListProps = {
  messages: Message[];
  error?: string;
  hasMore: boolean;
  onLoadMore: () => void;
};

export const MessageList = ({
  messages = [],
  hasMore,
  error,
  onLoadMore,
}: MessageListProps) => (
  <div
    id="scrollableDiv"
    className="h-full md:h-96 flex-col-reverse overflow-auto flex"
  >
    {error ? (
      <div className="text-red-400 text-center mb-6">{error}</div>
    ) : (
      <InfiniteScroll
        dataLength={messages.length}
        next={onLoadMore}
        className="flex flex-col-reverse"
        inverse={true}
        hasMore={hasMore}
        loader={<div className="text-gray-500 text-center p-2">Loading...</div>}
        scrollableTarget="scrollableDiv"
      >
        {messages.map(({ body, id }) => (
          <MessageItem key={id} text={body} />
        ))}
      </InfiniteScroll>
    )}
  </div>
);
