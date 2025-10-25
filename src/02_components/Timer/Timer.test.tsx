// --------------------------------------------
//
// Timer
// -> Tests
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import { render, screen } from "@testing-library/react";
import { Timer } from "./Timer";

// --------------------------------------------
// Tests
// --------------------------------------------

describe("Timer", () => {
  it("renders the Timer component", () => {
    render(<Timer duration={60} running={true} />);
    screen.debug();
  });
});
