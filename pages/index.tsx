import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-200 py-6 px-5 flex flex-col space-y-5">
      <div className="bg-white p-10 rounded-2xl shadow-md">
        <span className="text-2xl font-semibold">Select Item</span>
        <div className="flex justify-between my-2">
          <span className="text-gray-500">Grey Chair</span>
          <span className="font-bold">$170</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Tooly Table</span>
          <span className="font-bold">$800</span>
        </div>
        <div className="flex justify-between my-2 pt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span className="font-bold">$970</span>
        </div>
        <div className="mt-3 bg-blue-500 text-white rounded-xl p-5 w-1/2 text-center mx-auto text-lg">
          Checkout
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="bg-blue-500 p-6 pb-14">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-3xl p-6 bg-white relative -top-4">
          <div className="flex justify-between items-end relative -top-16">
            <div className="flex flex-col items-center">
              <span className="text-gray-500 text-sm">Orders</span>
              <span className="font-bold">450</span>
            </div>
            <div className="h-24 w-24 bg-red-300 rounded-full"></div>
            <div className="flex flex-col items-center">
              <span className="text-gray-500 text-sm">Spend</span>
              <span className="font-bold">$450</span>
            </div>
          </div>
          <div className=" flex flex-col items-center -mt-10 -mb-5">
            <span className="text-2xl font-medium">Tony Molloy</span>
            <span className="text-sm text-gray-500">New York, USA</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-md"></div>
      <div className="bg-white p-6 rounded-2xl shadow-md"></div>
    </div>
  );
};

export default Home;
