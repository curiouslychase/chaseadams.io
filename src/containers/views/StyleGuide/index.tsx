import { useContext } from "react";
import { ThemeContext } from "styled-components";
import styled from "styled-components";

const Swatch = styled.div`
  display: flex;
  background-color: var(--color);
  width: 100px;
  height: 100px;
  align-items: center;
  justify-content: center;
`;

const SwatchCollection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const StyleGuideView = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <div>
      <h1>Style Guide</h1>
      <div>
        <h2>Colors</h2>
        <SwatchCollection>
          {Object.entries(themeContext.colors).map(
            ([colorName, colorValue]) => (
              <div>
                <Swatch
                  style={{ "--color": colorValue } as React.CSSProperties}
                >
                  {colorValue}
                </Swatch>
                {colorName}
              </div>
            )
          )}
        </SwatchCollection>
      </div>
    </div>
  );
};

export default StyleGuideView;
