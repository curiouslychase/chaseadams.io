import { ChangeEvent, useCallback, useState } from "react";

import { DarkModeContainer } from "~/components/shared/DarkModeContainer";
import { PageMetaHead } from "~/components/shared/PageMeta";
import { SiteFooter } from "~/components/SiteFooter";
import { SiteHeader } from "~/components/SiteHeader";

type UsePercentageToHexadecimalConverterStateTuple = [
  values: {
    percentage: number;
    hexadecimal: string;
    hexColor: string;
  },
  handlers: {
    handleConvertPercentageToHexadecimal: () => void;
    handleHexColorChange: (evt: ChangeEvent<HTMLInputElement>) => void;
    handlePercentageChange: (
      evt: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => void;
  },
  events: {
    percentage: null;
    hexadecimal: null;
    hexColor: null;
  }
];

const usePercentageToHexadecimalConverterState = (): UsePercentageToHexadecimalConverterStateTuple => {
  const [percentage, setPercentage] = useState<number>(42);
  const [hexadecimal, setHexadecimal] = useState<string>("6B");
  const [hexColor, setHexColor] = useState<string>("#ff0000");

  const handlePercentageChange = useCallback(
    (evt: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const val = +evt.target.value;
      if (!isNaN(val)) {
        if (0 <= val && val <= 100) {
          setPercentage(val);
        } else {
          console.error(`🙃 ${val} must be between 0 and 100`);
        }
      } else {
        console.error(`🙃 ${evt.target.value} is not a number.`);
      }
    },
    []
  );

  const handleConvertPercentageToHexadecimal = useCallback(() => {
    setHexadecimal(convertNumberToHexadecimal(percentage));
  }, [percentage]);

  const handleHexColorChange = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => {
      let color = evt.target.value.toUpperCase();
      if (!evt.target.value.startsWith("#")) {
        color = `#${color}`;
      }
      if (color !== "#" && !color.match(/^#[0-9A-F]+$/)) {
        console.error(
          `🙃 hexadecimal color can only contain hexadecimal characters`
        );
      } else if (evt.target.value.length > 7) {
        console.error(
          `🙃 hex color can't be longer than "#" plus 6 characters`
        );
      } else {
        setHexColor(color);
      }
    },
    []
  );

  return [
    {
      percentage,
      hexadecimal,
      hexColor,
    },
    {
      handleConvertPercentageToHexadecimal,
      handleHexColorChange,
      handlePercentageChange,
    },
    {
      percentage: null,
      hexadecimal: null,
      hexColor: null,
    },
  ];
};

const meta = {
  title: "Percentage to Hexadecimal Converter",
  description: "Convert an opacity percentage to a hexadecimal alpha value.",
};

const PercentageToHexadecimalConverterPage = () => {
  const [values, handlers] = usePercentageToHexadecimalConverterState();

  const [percentageMode, setPercentageMode] = useState<"type" | "pick">("type");

  const handlePercentageModeClick = useCallback((evt) => {
    if (evt.target.value !== "type" && evt.target.value !== "pick") {
      console.error(
        `🙃 ${evt.target.value} is not an expected percentageMode type`
      );
    }
    setPercentageMode(evt.target.value);
  }, []);

  return (
    <DarkModeContainer>
      <PageMetaHead
        page={{
          title: meta.title,
          description: meta.description,
        }}
      />
      <div className="page-container">
        <SiteHeader />
        <div className="section-container">
          <hgroup>
            <h1 className="text-center text-3xl mb-6">
              <span className="highlighter font-bold text-slate-50">
                {meta.title}
              </span>
            </h1>
            <h2 className="text-center font-bold">{meta.description}</h2>
          </hgroup>

          <div className="flex flex-col-reverse lg:w-[848px] lg:mx-auto">
            <Abstract />
            <div className="flex flex-col justify-between py-10">
              <form className="flex flex-col items-center gap-5">
                <div>
                  <label>
                    <select
                      onChange={handlePercentageModeClick}
                      className="border-slate-500 rounded-lg p-3 pr-1 border bg-transparent dark:border-blue-400 dark:text-white"
                    >
                      <option value="type">Type</option>
                      <option value="pick">Pick</option>
                    </select>{" "}
                    a percentage:
                    <span className="">
                      {percentageMode === "type" && (
                        <span className="">
                          <input
                            className="my-5 ml-1 p-3 border rounded-lg bg-transparent border-slate-500 dark:border-blue-500 dark:text-white w-[6rem] text-center"
                            type="text"
                            value={values.percentage}
                            onChange={handlers.handlePercentageChange}
                          />{" "}
                          %
                        </span>
                      )}
                      {percentageMode === "pick" && (
                        <select
                          className="bg-transparent text-center border rounded-lg p-3 my-5 ml-1 border-slate-500 dark:border-blue-500 dark:text-white"
                          onChange={handlers.handlePercentageChange}
                        >
                          {[0, 10, 20, 30, 40, 42, 50, 60, 70, 80, 90, 100].map(
                            (percentage) => (
                              <option key={percentage} value={percentage}>
                                {percentage}%
                              </option>
                            )
                          )}
                        </select>
                      )}
                    </span>
                  </label>
                </div>
                <button
                  className="button cta  dark:disabled:bg-blue-100 dark:disabled:hover:bg-blue-100 dark:disabled:text-slate-400 dark:disabled:hover:text-slate-400 dark:disabled:hover:scale-100"
                  type="button"
                  disabled={values.hexColor.length < 7}
                  onClick={handlers.handleConvertPercentageToHexadecimal}
                >
                  Convert Percentage to Hexadecimal
                </button>
              </form>

              <div className="mt-8">
                <h2 className="text-2xl text-center mt-4">Result</h2>
                <div className="flex flex-col items-center">
                  <code className="block my-5 font-bold highlighter text-slate-50 p-4 rounded text-3xl lg:text-5xl">
                    {values.hexadecimal}
                  </code>
                </div>
                <div className="mt-10 p-5 border rounded-lg border-slate-500">
                  <div className="text-center text-3xl">
                    Apply it to a color
                  </div>
                  <div>
                    <label className="flex flex-col items-center">
                      Type a hexadecimal color:
                      <div className="my-5 flex items-center gap-3">
                        <input
                          aria-label="Hexadecimal Color"
                          type="text"
                          className="text-center rounded-lg border border-slate-500 dark:border-blue-400 p-3 inline-block bg-transparent dark:text-white"
                          value={values.hexColor}
                          onChange={handlers.handleHexColorChange}
                        />
                        <span
                          className="inline-block w-[24px] h-[24px] rounded-full"
                          style={{ backgroundColor: `${values.hexColor}` }}
                        ></span>
                      </div>
                      {values.hexColor.length < 7 ? (
                        <span className="block text-red-400">
                          hexadecimal has to be 6 characters to use alpha value.
                        </span>
                      ) : null}
                    </label>
                  </div>
                  <div className="flex mt-6 justify-around">
                    <div className="flex flex-col items-center">
                      <span>Color</span>
                      <div
                        className={`w-[128px] h-[128px] my-3`}
                        style={{ backgroundColor: values.hexColor }}
                      ></div>
                      <span className="block">
                        (<code>{values.hexColor}</code>)
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span>Color with Alpha Applied</span>
                      <div
                        className={`w-[128px] h-[128px]  my-3`}
                        style={{
                          backgroundColor: `${values.hexColor}${values.hexadecimal}`,
                        }}
                      ></div>
                      <span className="block">
                        (
                        <code>
                          {values.hexColor}
                          {values.hexadecimal}
                        </code>
                        )
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SiteFooter />
      </div>
    </DarkModeContainer>
  );
};

const Abstract = () => {
  return (
    <div>
      <section className="mt-8">
        <h2 className="mb-3 text-2xl">Who It&apos;s For</h2>
        <p className="py-2">
          Any developer or designer who needs to convert a percentage
          (particularly an opacity percentage) to a hexadecimal alpha value.
        </p>
      </section>
      <section className="mt-8">
        <h2 className="mb-3 text-2xl">Why I Built It</h2>
        <p className="py-2">
          I found myself constantly searching for a conversion table for opacity
          in percentage to an alpha value (opacity as a number between 0.0 and
          1.0).
        </p>
        <p className="py-2">
          I wanted to build something simple that let me type or pick a
          percentage and have it automatically convert into the alpha equivalent
          in hexadecimal. This also gave me the chance to understand hexadecimal
          conversion with a concrete example.
        </p>
      </section>
    </div>
  );
};

const convertNumberToHexadecimal = (val: number) => {
  const valAsDecimal = Math.round((val * 255) / 100);
  let valAsHexadecimal = valAsDecimal.toString(16).toUpperCase();

  if (valAsHexadecimal.length < 2) {
    valAsHexadecimal = `0${valAsHexadecimal}`;
  }

  return valAsHexadecimal;
};

export default PercentageToHexadecimalConverterPage;
