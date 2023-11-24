import React from "react";
import { fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import testingRenderer from "../../utils/testingRenderer";

import Header from "../header";

describe("Header", () => {
  it("renders the moon icon when light theme is on", () => {
    const { getByTestId } = testingRenderer(<Header />);

    expect(getByTestId("moon-icon")).toBeTruthy();
  });

  it("renders the sun icon when dark theme is on", () => {
    const { getByTestId, getByLabelText } = testingRenderer(<Header />);

    fireEvent.click(getByLabelText("theme switch"));

    expect(getByTestId("sun-icon")).toBeTruthy();
  });
});
