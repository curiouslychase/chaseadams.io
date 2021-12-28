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
        <div className="section-container pt-0">
          <div>
            <span className="text-white text-sm uppercase bg-blue-500 dark:bg-blue-800 p-1 rounded-md">
              Tools
            </span>
            <hgroup>
              <h1 className="text-2xl mt-2 mb-1">
                <span className="font-bold dark:text-slate-50">
                  {meta.title}
                </span>
              </h1>
              <h2 className="italic">{meta.description}</h2>
            </hgroup>
          </div>

          <div className="flex flex-col-reverse">
            <div className="lg:max-w-[40rem] lg:mx-auto">
              <Abstract />
            </div>
            <div className="text-base m-10">
              <hgroup className="rounded-t-xl border-2 border-blue-400 border-b-slate-400 dark:border-b-slate-600 bg-slate-300 text-black dark:bg-slate-800 dark:text-slate-50 text-center py-4">
                <h1 className="font-bold text-2xl">{meta.title}</h1>
                <h2 className="italic text-sm mt-2 text-slate-600 dark:text-slate-300">
                  {meta.description}
                </h2>
              </hgroup>
              <div className="border-2 border-t-0 border-blue-400 rounded-b-xl">
                <div className="flex flex-col lg:gap-10 lg:flex-row justify-between">
                  <form className="m-8 flex lg:flex-1 flex-col lg:flex-row justify-around items-center gap-5">
                    <div>
                      <div>
                        <label>
                          <select
                            onChange={handlePercentageModeClick}
                            className="border-slate-500 rounded-lg mr-1 p-3 pr-1 border bg-transparent dark:border-blue-400 dark:text-white"
                          >
                            <option value="type">Type</option>
                            <option value="pick">Pick</option>
                          </select>{" "}
                          a percentage:
                          <span>
                            {percentageMode === "type" && (
                              <span className="">
                                <input
                                  className=" ml-2 p-3 border rounded-lg bg-transparent border-slate-500 dark:border-blue-500 dark:text-white w-[6rem] text-center"
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
                                {[
                                  0,
                                  10,
                                  20,
                                  30,
                                  40,
                                  42,
                                  50,
                                  60,
                                  70,
                                  80,
                                  90,
                                  100,
                                ].map((percentage) => (
                                  <option key={percentage} value={percentage}>
                                    {percentage}%
                                  </option>
                                ))}
                              </select>
                            )}
                          </span>
                        </label>
                      </div>
                      <div className="text-center">
                        <button
                          className="mt-8 py-2 px-3 rounded-lg bg-blue-600 text-slate-50 dark:bg-blue-500 dark:disabled:bg-blue-100 dark:disabled:hover:bg-blue-100 dark:disabled:text-slate-400 dark:disabled:hover:text-slate-400 dark:disabled:hover:scale-100"
                          type="button"
                          onClick={
                            handlers.handleConvertPercentageToHexadecimal
                          }
                        >
                          Convert
                          <span className="hidden">
                            {" "}
                            Percentage to Hexadecimal
                          </span>
                        </button>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl text-center mt-4">Result</h2>
                      <div className="flex flex-col items-center">
                        <code className="block my-5 font-bold highlighter text-slate-50 p-4 rounded text-3xl lg:text-5xl">
                          {values.hexadecimal}
                        </code>
                      </div>
                    </div>
                  </form>

                  <div className="mt-8 lg:mt-0 lg:max-w-[300px] border-l-2 border-l-slate-300 dark:border-l-slate-600">
                    <div className="p-5">
                      <div>
                        <label className="flex flex-col items-center">
                          <div className="text-center text-xl">
                            Apply it to a color
                          </div>
                          <div>
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
                                style={{
                                  backgroundColor: `${values.hexColor}`,
                                }}
                              ></span>
                            </div>

                            {values.hexColor.length < 7 ? (
                              <span className="block text-red-400 leading-1 pb-4">
                                hexadecimal has to be 6 characters to use alpha
                                value.
                              </span>
                            ) : null}
                          </div>
                        </label>
                      </div>
                      <div className="flex flex-col justify-around">
                        <div className="flex flex-col items-center">
                          <div
                            className={`w-full h-[64px]`}
                            style={{ backgroundColor: values.hexColor }}
                          ></div>
                          <span className="block mt-2">
                            (<code>{values.hexColor}</code>)
                          </span>
                        </div>
                        <div className="flex flex-col mt-4 items-center">
                          <span>Alpha Applied</span>
                          <div
                            className={`w-full h-[64px]  my-3`}
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
