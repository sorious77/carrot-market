import type { NextPage } from "next";

const Community: NextPage = () => {
  return (
    <div className="p-3 space-y-8">
      {[1, 2, 3, 4, 5, 6].map((_, i) => (
        <div key={i} className="flex flex-col cursor-pointer">
          <span className="bg-gray-200 text-gray-800 px-2 py-0.5 flex items-center w-20 rounded-2xl font-medium justify-center">
            동네질문
          </span>
          <span className="my-2 text-lg">
            <span className="text-orange-500 font-medium">Q.</span> What is the
            best mandu restaurant?
          </span>
          <div className="flex justify-between text-gray-500 text-sm border-b border-b-gray-200 pb-2">
            <span>니꼬</span>
            <span className="font-medium">18시간 전</span>
          </div>
          <div className="flex text-gray-600 items-center space-x-4 border-b-2 border-b-gray-200 py-2">
            <span className="flex items-center space-x-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>궁금해요 1</span>
            </span>
            <span className="flex items-center space-x-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
              <span>답변 1</span>
            </span>
          </div>
        </div>
      ))}
      <button className="bg-orange-400 hover:bg-orange-500 transition-colors text-white rounded-full w-14 h-14 flex items-center justify-center fixed bottom-16 right-4 shadow-lg">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Community;
