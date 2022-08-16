import { cls } from "../libs/utils";

interface LayoutProps {
  title?: string;
  canGoBack?: boolean;
  hasTabBar?: boolean;
  children: React.ReactNode;
}

export default function Layout({
  title,
  canGoBack,
  hasTabBar,
  children,
}: LayoutProps) {
  return (
    <div>
      <div className="bg-white w-full text-2xl font-medium py-3 fixed text-orange-500 border-b top-0 flex items-center justify-center">
        {title && <span>{title}</span>}
      </div>
      <div className={cls("pt-14", hasTabBar ? "pb-20" : "")}>{children}</div>
      {hasTabBar && (
        <nav className="bg-white w-full text-2xl font-medium pb-10 pt-3 fixed text-orange-500 border-t bottom-0 flex items-center justify-center"></nav>
      )}
    </div>
  );
}
