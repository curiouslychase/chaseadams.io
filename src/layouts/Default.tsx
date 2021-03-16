import { useRouter } from "next/router";
import Prism from "prismjs";
import type { FC } from "react";
import { useEffect } from "react";
import { css } from "styled-components";

import Footer from "~/components/Footer";
import Navigation from "~/components/Navigation";

function getClassName({ pathname }: { pathname: string }) {
  let className = ``;

  if (pathname === `/`) {
    className = `home`;
  } else {
    className = pathname.split(`/`)[1];
  }
  return className;
}

const Layout: FC = ({ children }) => {
  const { pathname } = useRouter();
  const className = getClassName({ pathname });

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div
      className={className}
      css={css`
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      `}
    >
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
