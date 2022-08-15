import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col space-y-2 p-5">
      <details className="select-none open:bg-red-500">
        <summary className="cursor-pointer">What is my favorite food.</summary>
        <div>Chicken</div>
      </details>
    </div>
  );
};

export default Home;
