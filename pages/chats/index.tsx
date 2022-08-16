import type { NextPage } from "next";

const Chats: NextPage = () => {
  return (
    <div className="p-3 divide-y">
      {[1, 1, 1, 1, 1, 1].map((_, i) => (
        <div key={i} className="flex items-center py-3 space-x-3">
          <div className="bg-gray-300 w-10 h-10 rounded-full" />
          <div className="flex flex-col justify-center">
            <p>Steve Jebs</p>
            <p className="text-gray-500 text-sm cursor-pointer">
              See you tomorrow in the corner at 2pm!
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
