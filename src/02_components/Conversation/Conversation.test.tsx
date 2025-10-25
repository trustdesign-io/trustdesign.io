// --------------------------------------------
//
// Conversation
// -> Unit Test
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import { render, screen } from "@testing-library/react";
import Conversation from "./Conversation";

// --------------------------------------------
// Tests
// --------------------------------------------

describe("Conversation Component", () => {
  it("renders all Conversation.Item children", () => {
    render(
      <Conversation sequence={[{ delay: 1000 }, { delay: 2000 }]}>
        <Conversation.Item>Message 1</Conversation.Item>
        <Conversation.Item>Message 2</Conversation.Item>
      </Conversation>,
    );

    expect(screen.getByText("Message 1")).toBeInTheDocument();
    expect(screen.getByText("Message 2")).toBeInTheDocument();
  });

  it("applies active class to each Conversation.Item based on individual delay", () => {
    jest.useFakeTimers();

    render(
      <Conversation sequence={[{ delay: 1000 }, { delay: 2000 }]}>
        <Conversation.Item>Message 1</Conversation.Item>
        <Conversation.Item>Message 2</Conversation.Item>
      </Conversation>,
    );

    const firstItem = screen.getByText("Message 1");
    const secondItem = screen.getByText("Message 2");

    // Initial active item
    expect(firstItem).toHaveClass("active");
    expect(secondItem).not.toHaveClass("active");

    // Move to next item in sequence after its delay
    jest.advanceTimersByTime(1000);
    expect(firstItem).not.toHaveClass("active");
    expect(secondItem).toHaveClass("active");

    jest.useRealTimers();
  });

  it("renders Conversation.Item with initial active prop", () => {
    render(
      <Conversation sequence={[]}>
        <Conversation.Item active>Message 1</Conversation.Item>
        <Conversation.Item>Message 2</Conversation.Item>
      </Conversation>,
    );

    expect(screen.getByText("Message 1")).toHaveClass("active");
    expect(screen.getByText("Message 2")).not.toHaveClass("active");
  });
});
