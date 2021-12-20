import Link from "next/link";

import { Container } from "~/components/shared/Container";
import { ThemeSwitcher } from "~/components/ThemeSwitcher";

export const SiteFooter = () => {
  return (
    <div className="justify-self-end py-8 m-b-start-auto bg-slate-200 dark:bg-slate-900">
      <div>
        <Container>
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
        </Container>
      </div>
      <Container>
        <div className="flex justify-end">
          <div>
            <ThemeSwitcher />
          </div>
        </div>
      </Container>
    </div>
  );
};
