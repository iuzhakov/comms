type MessageItemProps = {
  text: string;
};

export const MessageItem = ({ text }: MessageItemProps) => {
  return (
    <div>
      <div className="bg-gray-100 p-3 rounded-lg my-1 mx-3 inline-block">
        {text}
      </div>
    </div>
  );
};
