// --------------------------------------------
//
// Keypad.test.tsx
// -> Unit Test
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Keypad from "./Keypad";

// --------------------------------------------
// Tests
// --------------------------------------------

describe("Keypad Component", () => {
  test("renders the correct number of Keypad.Item components", () => {
    render(
      <Keypad>
        <Keypad.Item index={1} onClick={() => {}}>
          1
        </Keypad.Item>
        <Keypad.Item index={2} onClick={() => {}}>
          2
        </Keypad.Item>
        <Keypad.Item index={3} onClick={() => {}}>
          3
        </Keypad.Item>
        <Keypad.Item index={4} onClick={() => {}}>
          4
        </Keypad.Item>
      </Keypad>,
    );

    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(4); // Expects 4 items
  });

  test("applies active class to Keypad.Item on click", () => {
    render(
      <Keypad interval={500}>
        <Keypad.Item index={1} onClick={() => {}}>
          1
        </Keypad.Item>
        <Keypad.Item index={2} onClick={() => {}}>
          2
        </Keypad.Item>
        <Keypad.Item index={3} onClick={() => {}}>
          3
        </Keypad.Item>
      </Keypad>,
    );

    const item = screen.getByText("2");
    fireEvent.click(item); // Simulate click on "2"

    expect(item).toHaveClass("active"); // "2" should have active class
  });

  test("sequence prop activates keys in order", () => {
    jest.useFakeTimers();
    render(
      <Keypad sequence={[1, 2, 3]} interval={1000}>
        <Keypad.Item index={1} onClick={() => {}}>
          1
        </Keypad.Item>
        <Keypad.Item index={2} onClick={() => {}}>
          2
        </Keypad.Item>
        <Keypad.Item index={3} onClick={() => {}}>
          3
        </Keypad.Item>
      </Keypad>,
    );

    // Initially, no item should be active
    const items = screen.getAllByRole("button");
    items.forEach(item => expect(item).not.toHaveClass("active"));

    // Advance timers to simulate interval
    jest.advanceTimersByTime(1000);
    expect(items[0]).toHaveClass("active"); // "1" should be active

    jest.advanceTimersByTime(1000);
    expect(items[1]).toHaveClass("active"); // "2" should be active

    jest.advanceTimersByTime(1000);
    expect(items[2]).toHaveClass("active"); // "3" should be active

    jest.useRealTimers();
  });
});
