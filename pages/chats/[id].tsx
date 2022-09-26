import type { NextPage } from "next";
import Layout from "@components/layout";
import Message from "@components/messege";

const ChatDetail: NextPage = () => {
  return (
    <Layout canGoBack title="Steve">
      <div className="p-3 space-y-4 mb-16">
        <Message message="Hi how much are you selling them for?" />
        <Message message="I want ₩20,000" reversed />
        <Message message="미쳤어" />
        <div className="fixed w-full mx-auto max-w-md bottom-2 inset-x-0">
          <div className="flex items-center relative">
            <input
              type="text"
              className="shadow rounded-full w-full border-gray-300 focus:ring-orange-500 focus:outline-none focus:border-orange-500 transition-colors"
            />
            <div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0 transition-colors ">
              <button className="flex items-center bg-orange-500 rounded-full px-3 text-sm text-white  hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChatDetail;
