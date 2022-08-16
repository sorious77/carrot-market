import type { NextPage } from "next";
import Layout from "../../components/layout";

const Stream: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="pb-4 px-3">
        <div className="pt-4 mb-10">
          <div className="w-full rounded-lg shadow-sm bg-slate-300 aspect-video" />
          <h3 className="text-gray-800 font-medium text-center text-2xl mt-2">
            Let&apos;s try potatos
          </h3>
        </div>
        <div className="h-[60vh] mb-10 space-y-4 overflow-y-scroll">
          <div className="flex">
            <div className="bg-gray-200 w-8 h-8 rounded-full mr-2" />
            <div className="border-[1.5px] w-1/2 border-gray-300 rounded-lg pl-3 pr-5 py-2 shadow">
              Hi how much are you selling them for?
            </div>
          </div>
          <div className="flex flex-row-reverse">
            <div className="bg-gray-200 w-8 h-8 rounded-full ml-2" />
            <div className="border-[1.5px] w-1/2 border-gray-300 rounded-lg pl-3 pr-5 py-2 shadow">
              I want ￦20,000
            </div>
          </div>
          <div className="flex">
            <div className="bg-gray-200 w-8 h-8 rounded-full mr-2" />
            <div className="border-[1.5px] w-1/2 border-gray-300 rounded-lg pl-3 pr-5 py-2 shadow">
              Hi how much are you selling them for?
            </div>
          </div>
          <div className="flex flex-row-reverse">
            <div className="bg-gray-200 w-8 h-8 rounded-full ml-2" />
            <div className="border-[1.5px] w-1/2 border-gray-300 rounded-lg pl-3 pr-5 py-2 shadow">
              I want ￦20,000
            </div>
          </div>
          <div className="flex">
            <div className="bg-gray-200 w-8 h-8 rounded-full mr-2" />
            <div className="border-[1.5px] w-1/2 border-gray-300 rounded-lg pl-3 pr-5 py-2 shadow">
              Hi how much are you selling them for?
            </div>
          </div>
          <div className="flex flex-row-reverse">
            <div className="bg-gray-200 w-8 h-8 rounded-full ml-2" />
            <div className="border-[1.5px] w-1/2 border-gray-300 rounded-lg pl-3 pr-5 py-2 shadow">
              I want ￦20,000
            </div>
          </div>
          <div className="flex">
            <div className="bg-gray-200 w-8 h-8 rounded-full mr-2" />
            <div className="border-[1.5px] w-1/2 border-gray-300 rounded-lg pl-3 pr-5 py-2 shadow">
              Hi how much are you selling them for?
            </div>
          </div>
          <div className="flex flex-row-reverse">
            <div className="bg-gray-200 w-8 h-8 rounded-full ml-2" />
            <div className="border-[1.5px] w-1/2 border-gray-300 rounded-lg pl-3 pr-5 py-2 shadow">
              I want ￦20,000
            </div>
          </div>
          <div className="flex">
            <div className="bg-gray-200 w-8 h-8 rounded-full mr-2" />
            <div className="border-[1.5px] w-1/2 border-gray-300 rounded-lg pl-3 pr-5 py-2 shadow">
              Hi how much are you selling them for?
            </div>
          </div>
          <div className="flex flex-row-reverse">
            <div className="bg-gray-200 w-8 h-8 rounded-full ml-2" />
            <div className="border-[1.5px] w-1/2 border-gray-300 rounded-lg pl-3 pr-5 py-2 shadow">
              I want ￦20,000
            </div>
          </div>
          <div className="flex">
            <div className="bg-gray-200 w-8 h-8 rounded-full mr-2" />
            <div className="border-[1.5px] w-1/2 border-gray-300 rounded-lg pl-3 pr-5 py-2 shadow">
              Hi how much are you selling them for?
            </div>
          </div>
          <div className="flex flex-row-reverse">
            <div className="bg-gray-200 w-8 h-8 rounded-full ml-2" />
            <div className="border-[1.5px] w-1/2 border-gray-300 rounded-lg pl-3 pr-5 py-2 shadow">
              I want ￦20,000
            </div>
          </div>
        </div>
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

export default Stream;
