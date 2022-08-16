import type { NextPage } from "next";
import Layout from "../components/layout";

const Home: NextPage = () => {
  return (
    <Layout title="홈" hasTabBar>
      <div>
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <div
            key={i}
            className="flex justify-between py-5 px-3 border-b border-b-gray-200 last:border-b-none"
          >
            <div className="flex items-center">
              <div className="bg-gray-400 w-20 h-20 rounded-lg mr-3" />
              <div className="flex flex-col">
                <h3 className="font-medium">New iPhone 14</h3>
                <span className="text-gray-500 text-xs mb-2">Black</span>
                <span className="font-medium text-xl">$95</span>
              </div>
            </div>
            <div className="flex items-end space-x-3 text-opacity-60 text-black">
              <div className="flex items-center space-x-1">
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
                <span>1</span>
              </div>
              <div className="flex items-center space-x-1">
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
                <span>1</span>
              </div>
            </div>
          </div>
        ))}
        <button className="bg-orange-400 hover:bg-orange-500 transition-colors text-white rounded-full w-14 h-14 flex items-center justify-center fixed bottom-16 right-4 shadow-lg">
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      </div>
    </Layout>
  );
};

export default Home;
