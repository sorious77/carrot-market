import type { NextPage } from "next";
import Layout from "../../components/layout";
import Input from "../../components/input";
import TextArea from "../../components/textarea";
import Button from "../../components/button";

const Create: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="space-y-5 pb-10 px-3">
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
        <Button text="Go live" />
      </div>
    </Layout>
  );
};

export default Create;
