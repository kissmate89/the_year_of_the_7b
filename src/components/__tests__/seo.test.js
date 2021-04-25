import React from "react";
import { render, waitFor } from "@testing-library/react";
import { useStaticQuery } from "gatsby";

import SeoMeta from "../seo";

const getMeta = (metaName) => {
  const metas = Array.from(document.getElementsByTagName("meta"));
  const meta = metas.find((i) => i.getAttribute("name") === metaName);

  if (meta) {
    return meta.getAttribute("content");
  }

  return "";
};

const metadataMock = {
  site: {
    siteMetadata: {
      title: "The year of the 7b",
      description: "A starter blog for starters",
      author: "A climber",
    },
  },
};

describe("SeoMeta component", () => {
  beforeEach(() => {
    useStaticQuery.mockReturnValue(metadataMock);
  });

  it("renders the title correctly", async () => {
    render(<SeoMeta title="Website" />);

    await waitFor(() =>
      expect(document.title).toEqual(
        `Website | ${metadataMock.site.siteMetadata.title}`
      )
    );
  });

  it("renders the description correctly", async () => {
    render(<SeoMeta title="Website" />);

    await waitFor(() =>
      expect(getMeta("description")).toEqual(
        metadataMock.site.siteMetadata.description
      )
    );
  });

  it("renders the right author", async () => {
    render(<SeoMeta title="Website" />);

    await waitFor(() =>
      expect(getMeta("twitter:creator")).toEqual(
        metadataMock.site.siteMetadata.author
      )
    );
  });
});
