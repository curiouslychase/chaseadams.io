import Head from "next/head";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import styled, { css } from "styled-components";

import DefaultLayout from "~/layouts/Default";

const Swatch = styled.div``;

export default function Home() {
  const themeContext = useContext(ThemeContext);

  return (
    <DefaultLayout>
      <Head>
        <title>Style Guide | Chase Adams</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>Style Guide</h1>
        <div>
          <h2>Colors</h2>
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
              gap: 1rem;
            `}
          >
            {Object.entries(themeContext.colors).map(
              ([colorName, colorValue]) => (
                <div key={colorName}>
                  <Swatch
                    css={css`
                      display: flex;
                      background-color: ${colorValue};
                      width: 100px;
                      height: 100px;
                      align-items: center;
                      justify-content: center;
                    `}
                  >
                    {colorValue}
                  </Swatch>
                  {colorName}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
