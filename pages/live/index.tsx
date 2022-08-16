import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../../components/layout";
import FloatingButton from "../../components/floating-button";

const Live: NextPage = () => {
  return (
    <Layout title="라이브" hasTabBar>
      <div className="divide-y-[1px] space-y-4 pb-10">
        {[1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Link key={i} href={`/live/${i}`}>
            <div className="pt-4  px-3">
              <div className="w-full rounded-lg shadow-sm bg-slate-300 aspect-video" />
              <h3 className="text-gray-700 text-lg mt-2">Galaxy S50</h3>
            </div>
          </Link>
        ))}
        <FloatingButton href="/live/create">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            ></path>
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Live;
