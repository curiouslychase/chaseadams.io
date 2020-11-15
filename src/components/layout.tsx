import type { FC } from "react";
import React from "react";

import Link from "next/link";

const Layout: FC = ({ children }) => {
  return (
    <div>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
      </nav>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
