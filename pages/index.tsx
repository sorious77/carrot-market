import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-200 py-6 px-5 space-y-5 min-h-screen grid gap-10 lg:grid-cols-2 xl:grid-cols-3 xl:place-content-center dark">
      <div className="bg-white dark:bg-black p-10 rounded-2xl shadow-md flex flex-col justify-between">
        <span className="text-2xl font-semibold dark:text-white">
          Select Item
        </span>
        <ul>
          {[1, 2, 3, 4, 5].map((i) => (
            <div className="flex justify-between my-2" key={i}>
              <span className="text-gray-500 dark:text-gray-100">
                Grey Chair
              </span>
              <span className="font-bold dark:text-white">$170</span>
            </div>
          ))}
        </ul>
        <div className="flex justify-between my-2 pt-2 border-t-2 border-dashed dark:text-white">
          <span>Total</span>
          <span className="font-bold">$970</span>
        </div>
        <button
          className="mt-5 bg-blue-500 dark:bg-black dark:border-white dark:border text-white
          rounded-xl p-3 w-3/4 text-center block mx-auto text-lg hover:bg-teal-500 hover:text-black dark:hover:bg-white active:bg-yellow-500 focus:bg-red-500"
        >
          Checkout
        </button>
      </div>
      <div className="bg-white rounded-2xl shadow-md overflow-hidden group dark">
        <div className="portrait:bg-blue-500 landscape:bg-indigo-300 p-6 pb-14 xl:pb-40">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-3xl p-6 bg-white relative -top-4">
          <div className="flex justify-between items-end relative -top-16">
            <div className="flex flex-col items-center">
              <span className="text-gray-500 text-sm">Orders</span>
              <span className="font-bold">450</span>
            </div>
            <div className="h-24 w-24 bg-red-300 rounded-full group-hover:bg-red-500"></div>
            <div className="flex flex-col items-center">
              <span className="text-gray-500 text-sm">Spend</span>
              <span className="font-bold">$450</span>
            </div>
          </div>
          <div className="flex flex-col items-center -mt-10 -mb-5">
            <span className="text-2xl font-medium">Tony Molloy</span>
            <span className="text-sm text-gray-500">New York, USA</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-md lg:col-span-2 xl:col-span-1 dark">
        <div className="flex justify-between mb-3">
          <span>⬅️</span>
          <div className="space-x-3">
            <span>🌟 4.9</span>
            <span className="shadow-xl p-2 rounded-md">💖</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-72 mb-5 rounded" />
        <div className="flex flex-col">
          <span className="font-medium text-lg">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-3 mb-5 flex justify-between items-center">
            <div className="space-x-2">
              {["yellow", "indigo", "teal"].map((color, idx) => (
                <button
                  key={idx}
                  className={`w-5 h-5 rounded-full bg-${color}-500 focus:ring-2 ring-offset-2 ring-${color}-500 transition`}
                />
              ))}
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
