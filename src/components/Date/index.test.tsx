import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Date from "./index";

describe("Date", () => {
  test("should render a component with the correct date format", () => {
    const dateString = "2020-03-14";
    render(<Date dateString={dateString} />);

    expect(screen.getByTitle("Last Updated Date")).toHaveTextContent(
      "2020/03/14"
    );

    expect(screen.getByTitle("Last Updated Date")).toHaveAttribute(
      "dateTime",
      "2020-03-14"
    );
  });
});
