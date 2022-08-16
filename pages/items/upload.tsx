import type { NextPage } from "next";
import Layout from "../../components/layout";

const Upload: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="p-3">
        <div>
          <div className="border-2 border-gray-400 border-dashed rounded-lg h-60 flex items-center justify-center cursor-pointer hover:border-orange-500 hover:text-orange-500">
            <label>
              <svg
                className="h-12 w-12"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <input type="file" className="hidden" />
            </label>
          </div>
        </div>
        <div className="mt-4">
          <label>Price</label>
          <div className="flex items-center">
            <div className="border border-gray-300 p-2 rounded-l-lg border-r-0 select-none text-gray-500">
              <span>$</span>
            </div>
            <input
              type="text"
              placeholder="0.00"
              className="border border-gray-300 border-x-0 w-full placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:border"
            />
            <div className="border border-gray-300 p-2 rounded-r-lg border-l-0 select-none text-gray-500">
              <span>USD</span>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <label>Description</label>
          <div>
            <textarea
              rows={4}
              className="w-full border border-gray-300 shadow rounded-lg focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
        </div>
        <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg shadow hover:bg-orange-600 w-full focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
          Upload product
        </button>
      </div>
    </Layout>
  );
};

export default Upload;
