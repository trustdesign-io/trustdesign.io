// --------------------------------------------
//
// Shards
// -> Tests
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import { render, screen } from "@testing-library/react";
import Shards from "./Shards";

// --------------------------------------------
// Tests
// --------------------------------------------

describe("Shards", () => {
  it("renders the Shards component", () => {
    render(<Shards>Shards</Shards>);
    screen.debug();
  });
});
