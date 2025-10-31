// --------------------------------------------
//
// PageFooter
// -> Tests
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import { render, screen } from "@testing-library/react";
import SiteFooter from "./SiteFooter";

// --------------------------------------------
// Tests
// --------------------------------------------

describe("PageFooter", () => {
  it("renders the SiteFooter component", () => {
    render(<SiteFooter>SiteFooter</SiteFooter>);
    screen.debug();
  });
});
