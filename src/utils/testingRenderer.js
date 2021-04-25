import React from "react";
import { render } from "@testing-library/react";

import { DarkLightProvider } from "./darkLight.provider";

const testingRenderer = (component) =>
  render(<DarkLightProvider>{component}</DarkLightProvider>);

export default testingRenderer;
