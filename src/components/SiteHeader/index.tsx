import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";

import { Blob } from "~/components/SiteHeader/components/Blob";
import { ThemeSwitcher } from "~/components/ThemeSwitcher";

type UseToggleTuple = [toggled: boolean, handlers: { toggle: () => void }];

const useToggle = (initialOpen = false): UseToggleTuple => {
  const [toggled, setToggled] = useState(initialOpen);

  const toggle = useCallback(() => {
    setToggled((prevVal) => !prevVal);
  }, [setToggled]);

  return [toggled, { toggle }];
};

export const SiteHeader = () => {
  const { asPath } = useRouter();
  const [toggled, { toggle }] = useToggle();

  return (
    <div>
      <div className="md:m-0 -my-4 fixed md:relative z-10 bg-slate-100 dark:bg-black section-container">
        <nav className="site-header flex justify-between pb-0 text-base md:text-lg">
          <div>
            <Link href="/">
              <a className="group flex items-center h-[64px] w-[64px] relative text-blue-600 dark:text-blue-400">
                <span className="absolute">
                  <Blob />
                </span>
                <span className="flex ml-3.5 text-black dark:text-slate-100 md:text-slate-100 md:dark:text-black z-10 text-2xl md:text-3xl font-bold mb-1 group-hover:text-black dark:group-hover:text-slate-100 md:group-hover:text-blue-600 md:dark:group-hover:text-blue-400 transition-all">
                  <span>c</span>
                  <span className="md:hidden md:group-hover:inline">hase</span>
                  <span className="md:group-hover:ml-2 md:ml-0 sm:ml-2">
                    {" "}
                    a
                  </span>
                  <span className="md:hidden md:group-hover:inline">dams</span>
                </span>
              </a>
            </Link>
          </div>
          <div className="flex md:hidden items-center">
            <button
              className="rounded-full outline px-4 py-2 lowercase"
              onClick={toggle}
            >
              {!toggled ? "Menu" : "X Close"}
            </button>
          </div>
          <div
            className={`md:flex md:bg-transparent md:relative ${
              toggled
                ? "bg-slate-50 dark:bg-black border-t border-slate-200 dark:border-slate-700 md:border-none divide-y fixed md:top-0 top-[128px] bottom-0 left-0 right-0 z-10"
                : "hidden"
            }`}
          >
            <ul className="flex flex-col md:flex-row gap-0 md:gap-6 items-start md:items-center md:justify-end lowercase">
              <li className="block md:hidden w-full border-b border-slate-20 dark:border-slate-700 md:border-none">
                <Link href="/">
                  <a
                    className="block md:p-0 p-8 md:inline-block w-full hover:bg-blue-600 hover:text-slate-50 dark:text-slate-300 dark:hover:text-slate-50 transition-all"
                    onClick={() => asPath === "/" && toggle()}
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li className="w-full md:w-fit border-b border-slate-20 dark:border-slate-700 md:border-none">
                <Link href="/posts">
                  <a
                    className={`${
                      asPath === "/posts/" ? "md:button md:active" : "md:button"
                    } block w-full rounded-none p-8 md:p-4 md:rounded-3xl hover:bg-blue-600 hover:text-slate-50 dark:text-slate-300 dark:hover:text-slate-50 transition-all`}
                    onClick={() => asPath === "/posts/" && toggle()}
                  >
                    Blog
                  </a>
                </Link>
              </li>
              <li className="w-full md:w-fit border-b border-slate-20 dark:border-slate-700 md:border-none">
                <Link href="/about-me">
                  <a
                    className={`${
                      asPath === "/about-me/"
                        ? "md:button md:active"
                        : "md:button"
                    } block w-full rounded-none p-8 md:p-4 md:rounded-3xl hover:bg-blue-600 hover:text-slate-50 dark:text-slate-300 dark:hover:text-slate-50 transition-all`}
                    onClick={() => asPath === "/about-me/" && toggle()}
                  >
                    About
                  </a>
                </Link>
              </li>
            </ul>
            <div className="flex items-center justify-center pt-16 md:hidden w-full border-b border-slate-20 dark:border-slate-700 md:border-none">
              <ThemeSwitcher />
            </div>
          </div>
        </nav>
      </div>

      <hr className="border-none h-[96px]" />
    </div>
  );
};
