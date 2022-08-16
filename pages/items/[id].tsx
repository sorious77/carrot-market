import type { NextPage } from "next";

const ItemDetail: NextPage = () => {
  return (
    <div className="p-3">
      <div>
        <div className="bg-gray-300 h-96" />
        <div className="flex items-center py-3 space-x-3 border-b border-b-gray-300">
          <div className="bg-gray-300 w-10 h-10 rounded-full" />
          <div className="flex flex-col justify-center">
            <p>Steve Jebs</p>
            <p className="text-gray-500 text-sm cursor-pointer">
              View profile &rarr;
            </p>
          </div>
        </div>
        <div className="mt-10">
          <h1 className="text-3xl font-medium">Galaxy S50</h1>
          <p className="text-2xl mt-2">$140</p>
          <p className="my-4 text-gray-600">
            My money&apos;s in that office, right? If she start giving me some
            bullshit about it ain&apos;t there, and we got to go someplace else
            and get it, I&apos;m gonna shoot you in the head then and there.
            Then I&apos;m gonna shoot that bitch in the kneecaps, find out where
            my goddamn money is. She gonna tell me too. Hey, look at me when
            I&apos;m talking to you, motherfucker. You listen: we go in there,
            and that ni**a Winston or anybody else is in there, you the first
            motherfucker to get shot. You understand?
          </p>
          <div className="flex items-center">
            <button className="bg-orange-500 text-white font-medium w-full py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-orange-600 focus:ring-orange-500">
              Talk to seller
            </button>
            <button className="p-4 text-gray-400 hover:text-gray-600">
              <svg
                className="h-6 w-6 "
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
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2 className="my-5 text-2xl font-medium">Similar items</h2>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <div key={i}>
              <div className="bg-gray-300 h-56" />
              <h3 className="text-gray-700 mt-2 text-sm font-medium">
                Galaxy S60
              </h3>
              <p className="text-gray-900">$6</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
