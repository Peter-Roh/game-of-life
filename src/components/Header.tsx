import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { toggleOpen } from "../redux/sidebar";
import type { RootState } from "../redux/store";

function Header() {
  const isOpen = useAppSelector((state: RootState) => state.sidebar).isOpen;
  const dispatch = useAppDispatch();

  return (
    <>
      <header className="flex h-28 w-full border-0 border-b-[1px] border-slate-600">
        <span className="flex-x-center ml-2">
          <button onClick={() => dispatch(toggleOpen())}>
            {isOpen ? (
              <svg
                className="icon"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
                />
              </svg>
            ) : (
              <svg
                className="icon"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                />
              </svg>
            )}
          </button>
        </span>
        <span className="flex-x-center mx-auto py-2 pr-8 font-mono text-5xl font-semibold">
          Game of Life
        </span>
      </header>
    </>
  );
}

export default Header;
