import Header from "./Header";
import Sidebar from "./Sidebar";

type LayoutProps = {
  children: JSX.Element;
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="page-full bg-slate-800 text-slate-200">
        <Sidebar />
        <div className="flex-y flex-1">
          <Header />
          <div className="flex-y-center flex-1">{children}</div>
        </div>
      </div>
    </>
  );
}

export default Layout;
