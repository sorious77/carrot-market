import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-200 py-6 px-5 flex flex-col space-y-5 min-h-screen">
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
        <button className="mt-3 bg-blue-500 text-white rounded-xl p-5 w-full text-center mx-auto text-lg hover:bg-teal-500 hover:text-black active:bg-yellow-500 focus:bg-red-500">
          Checkout
        </button>
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
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <div className="flex justify-between mb-3">
          <span>⬅️</span>
          <div className="space-x-3">
            <span>🌟 4.9</span>
            <span className="shadow-xl p-2 rounded-md">💖</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-72 mb-5" />
        <div className="flex flex-col">
          <span className="font-medium text-lg">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-3 mb-5 flex justify-between items-center">
            <div className="space-x-2">
              <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition"></button>
              <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-500 transition"></button>
              <button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-500 transition"></button>
            </div>
            <div className="flex items-center text-2xl space-x-2">
              <button className="bg-blue-100 aspect-square w-10 rounded-lg font-medium text-gray-600 flex justify-center items-center">
                -
              </button>
              <span>1</span>
              <button className="bg-blue-100 aspect-square w-10 rounded-lg font-medium text-gray-600 flex justify-center items-center">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-medium">$450</span>
            <button className="bg-blue-500 px-10 py-3 rounded-lg text-sm text-white">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
