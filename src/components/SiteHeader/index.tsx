import Link from "next/link";
import { useRouter } from "next/router";

import { Container } from "~/components/shared/Container";
import { Blob } from "~/components/SiteHeader/components/Blob";

export const SiteHeader = () => {
  const { asPath } = useRouter();
  return (
    <Container>
      <nav className="site-header flex justify-between pb-0 text-lg">
        <div>
          <Link href="/">
            <a className="group flex items-center h-[64px] w-[64px] relative text-2xl text-blue-600 dark:text-blue-400">
              <span className="absolute">
                <Blob />
              </span>
              <span className="flex ml-3.5 text-black dark:text-slate-100 md:text-slate-100 md:dark:text-black z-10 text-3xl font-bold mb-1 group-hover:text-black dark:group-hover:text-slate-100 md:group-hover:text-blue-600 md:dark:group-hover:text-blue-400 transition-all">
                <span>c</span>
                <span className="md:hidden md:group-hover:inline">hase</span>
                <span className="md:group-hover:ml-2 md:ml-0 sm:ml-2"> a</span>
                <span className="md:hidden md:group-hover:inline">dams</span>
              </span>
            </a>
          </Link>
        </div>
        <ul className="flex gap-6 items-center justify-end">
          <li>
            <Link href="/posts">
              <a
                className={`${
                  asPath === "/posts/" ? "button active" : "button"
                } p-4 rounded-3xl hover:bg-blue-600 hover:text-slate-50 dark:text-slate-300 transition-all`}
              >
                blog
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about-me">
              <a
                className={`${
                  asPath === "/about-me/" ? "button active" : "button"
                } p-4 rounded-3xl hover:bg-blue-600 hover:text-slate-50 dark:text-slate-300 transition-all`}
              >
                about
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
};
