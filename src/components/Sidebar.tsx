import { useAppSelector } from "../redux/hooks";
import type { RootState } from "../redux/store";

function Sidebar() {
  const isOpen = useAppSelector((state: RootState) => state.sidebar).isOpen;

  return (
    <>
      <aside
        className={`w-1/5 border-0 border-r-[1px] border-slate-600 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        sidebar
      </aside>
    </>
  );
}

export default Sidebar;
