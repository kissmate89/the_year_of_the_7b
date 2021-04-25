import React from "react";
import { fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import testingRenderer from "../testingRenderer";
import { useDarkLightProvider } from "../darkLight.provider";

const DarkLightProviderTest = () => {
  const { isDark, changeTheme } = useDarkLightProvider();

  return (
    <div>
      <span data-testid="darkLight-value">{`DarkLight provider value is: ${isDark}`}</span>
      <button
        data-testid="darkLight-changeTheme"
        onClick={() => changeTheme(!isDark)}
      ></button>
    </div>
  );
};

describe("DarkLight Provider", () => {
  let mockStorage = {};
  beforeEach(() => {
    global.Storage.prototype.setItem = jest.fn((key, value) => {
      mockStorage[key] = value;
    });
    global.Storage.prototype.getItem = jest.fn(
      (key) => mockStorage[key] || null
    );
  });

  it("shows default value", () => {
    const { getByTestId } = testingRenderer(<DarkLightProviderTest />);
    expect(getByTestId("darkLight-value")).toHaveTextContent(
      "DarkLight provider value is: false"
    );
  });

  it("shows new value after theme change", () => {
    const { getByTestId } = testingRenderer(<DarkLightProviderTest />);

    fireEvent.click(getByTestId("darkLight-changeTheme"));

    expect(getByTestId("darkLight-value")).toHaveTextContent(
      "DarkLight provider value is: true"
    );
  });

  it("loads value from localStorage if exist on load", () => {
    localStorage.setItem("isDarkTheme", true);
    const { getByTestId } = testingRenderer(<DarkLightProviderTest />);

    expect(getByTestId("darkLight-value")).toHaveTextContent(
      "DarkLight provider value is: true"
    );
  });

  it("matches prefered color scheme", () => {
    mockStorage = {};
    global.Window.prototype.matchMedia = () => {
      if ("(prefers-color-scheme: dark)") {
        return { matches: true };
      }
      return { matches: false };
    };
    const { getByTestId } = testingRenderer(<DarkLightProviderTest />);

    expect(getByTestId("darkLight-value")).toHaveTextContent(
      "DarkLight provider value is: true"
    );
  });
});
