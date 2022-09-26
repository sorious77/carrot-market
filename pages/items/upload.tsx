import type { NextPage } from "next";
import Layout from "@components/layout";
import Input from "@components/input";
import TextArea from "@components/textarea";
import Button from "@components/button";

const Upload: NextPage = () => {
  return (
    <Layout canGoBack title="Upload Products">
      <div className="px-3 space-y-4">
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
        <Input required label="Name" name="name" type="text" />
        <Input
          required
          label="Price"
          placeholder="0.00"
          name="price"
          type="text"
          kind="price"
        />
        <TextArea name="description" label="Description" />
        <Button text="Upload item" />
      </div>
    </Layout>
  );
};

export default Upload;
