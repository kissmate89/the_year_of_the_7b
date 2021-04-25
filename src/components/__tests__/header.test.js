import React from "react"

import testingRenderer from "../../utils/testingRenderer"

import Header from "../header"

describe("Header", () => {
  it("renders the title correctly", () => {
    const { getByTestId } = testingRenderer(
      <Header siteTitle="The year of the 7b" />
    )

    expect(getByTestId("header-title")).toHaveTextContent("The year of the 7b")
  })
})
