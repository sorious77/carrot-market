import type { NextPage } from "next";
import Layout from "@components/layout";
import TextArea from "@components/textarea";

const CommunityPostDetail: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="p-3 space-y-4">
        <span className="bg-gray-200 text-gray-800 px-2 py-0.5 flex items-center w-20 rounded-2xl font-medium justify-center">
          동네질문
        </span>
        <div className="flex space-x-2 items-center cursor-pointer border-b border-b-gray-200 pb-3">
          <div className="bg-gray-300 w-10 h-10 rounded-full" />
          <div>
            <p className="text-lg">Steve Jebs</p>
            <p className="text-sm text-gray-500 -mt-1">View profile →</p>
          </div>
        </div>
        <div>
          <div className="my-2 text-lg border-b border-b-gray-200 pb-3">
            <span className="text-orange-500 font-medium">Q.</span> What is the
            best mandu restaurant?
          </div>
          <div className="flex text-gray-600 items-center space-x-4 border-b-2 border-b-gray-200 py-2 -mt-1">
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
        <div>
          <div className="flex space-x-2 items-start justify-start">
            <div className="bg-gray-200 w-8 h-8 rounded-full" />
            <div className="flex flex-col">
              <span className="text-sm font-medium">Steve Jebs</span>
              <span className="text-sm text-gray-500">2시간 전</span>
              <p>The best mandu restaurant is the one next to my house.</p>
            </div>
          </div>
        </div>
        <div>
          <TextArea
            name="description"
            placeholder="Answer this question!"
            required
          />
          <button className="mt-4 w-full bg-orange-500 text-white px-4 py-2 rounded-lg shadow hover:bg-orange-600 focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
            Reply
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default CommunityPostDetail;
