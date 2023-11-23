import React from "react";
import { fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'

import testingRenderer from "../../utils/testingRenderer";

import Header from "../header";

describe("Header", () => {
  it("renders the title correctly", () => {
    const { getByTestId } = testingRenderer(
      <Header siteTitle="The year of the 7b" />
    );

    expect(getByTestId("header-title")).toHaveTextContent("The year of the 7b");
  });

  it("renders the moon icon when light theme is on", () => {
    const { getByTestId } = testingRenderer(
      <Header siteTitle="The year of the 7b" />
    );

    expect(getByTestId("moon-icon")).toBeTruthy();
  });

  it("renders the sun icon when dark theme is on", () => {
    const { getByTestId, getByLabelText } = testingRenderer(
      <Header siteTitle="The year of the 7b" />
    );

    fireEvent.click(getByLabelText("theme switch"));

    expect(getByTestId("sun-icon")).toBeTruthy();
  });
});
