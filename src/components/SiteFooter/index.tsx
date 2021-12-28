import Link from "next/link";

import { ThemeSwitcher } from "~/components/ThemeSwitcher";

export const SiteFooter = () => {
  return (
    <div className="justify-self-end py-8 m-b-start-auto bg-slate-200 dark:bg-slate-900">
      <div>
        <div className="section-container">
          <div className="block lg:flex justify-between">
            <div>
              <h2 className="font-bold text-md pb-0 lg:pb-4 uppercase text-blue-700 dark:text-blue-400">
                chaseadams.io
              </h2>
              <ul>
                <li>
                  <Link href="/posts">
                    <a>Blog</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about-me">
                    <a>About Me</a>
                  </Link>
                </li>
                <li className="pt-3">
                  <h3>Tools</h3>
                  <ul>
                    <li>
                      <Link href="/tools/percentage-to-hexadecimal-converter/">
                        <a>Percentage To Hexadecimal Converter</a>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="mt-4 lg:mt-0">
              <div>
                <h2 className="font-bold text-md pb-0 lg:pb-4 uppercase text-blue-700 dark:text-blue-400">
                  Connect
                </h2>
                <ul>
                  <li>
                    <a href="https://github.com/chaseadamsio">
                      chaseadamsio on GitHub
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/chaseadamsio">
                      chaseadamsio on Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="flex justify-end">
          <div>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
};
