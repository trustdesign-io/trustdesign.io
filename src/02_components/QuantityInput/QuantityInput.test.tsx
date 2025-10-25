// --------------------------------------------
//
// QuantityInput
// -> Tests
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import QuantityInput from "./QuantityInput";
import styles from "./themes/cultlux/QuantityInput.module.css";

// --------------------------------------------
// Tests
// --------------------------------------------

describe("QuantityInput", () => {
  test("renders with default props", () => {
    render(<QuantityInput value="5" onChange={() => {}} />);
    // Check that the input is in the document
    const inputElement = screen.getByRole("spinbutton");
    expect(inputElement).toBeInTheDocument();
    // Default value of '5'
    expect(inputElement).toHaveValue(5);
    // Should have base class
    expect(inputElement).toHaveClass(styles["quantity-input"]);
  });

  test("increments the value when plus button is clicked", () => {
    let currentValue = "5";
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      currentValue = e.target.value;
    };

    render(<QuantityInput value={currentValue} onChange={handleChange} />);
    const incrementButton = screen.getByRole("button", { name: "+" });
    const inputElement = screen.getByRole("spinbutton");

    // Click the "+" button
    fireEvent.click(incrementButton);

    // The new value should be "6"
    expect(currentValue).toBe("6");
    // The input's displayed value should match
    expect(inputElement).toHaveValue(6);
  });

  test("decrements the value when minus button is clicked", () => {
    let currentValue = "10";
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      currentValue = e.target.value;
    };

    render(<QuantityInput value={currentValue} onChange={handleChange} />);
    const decrementButton = screen.getByRole("button", { name: "-" });
    const inputElement = screen.getByRole("spinbutton");

    // Click the "-" button
    fireEvent.click(decrementButton);

    // The new value should be "9"
    expect(currentValue).toBe("9");
    // The input's displayed value should match
    expect(inputElement).toHaveValue(9);
  });

  test("disables input and buttons when disabled is true", () => {
    render(<QuantityInput value="5" onChange={() => {}} disabled />);
    const inputElement = screen.getByRole("spinbutton");
    const incrementButton = screen.getByRole("button", { name: "+" });
    const decrementButton = screen.getByRole("button", { name: "-" });

    // All controls should be disabled
    expect(inputElement).toBeDisabled();
    expect(incrementButton).toBeDisabled();
    expect(decrementButton).toBeDisabled();
    // Should have disabled style
    expect(inputElement).toHaveClass(styles["quantity-input--disabled"]);
  });

  test("displays message when provided", () => {
    render(
      <QuantityInput value="2" onChange={() => {}} message="Helper text" />,
    );
    const messageElement = screen.getByText("Helper text");
    expect(messageElement).toBeInTheDocument();
  });

  test("applies invalid styling when invalid is true", () => {
    render(<QuantityInput value="0" onChange={() => {}} invalid />);
    const inputElement = screen.getByRole("spinbutton");
    expect(inputElement).toHaveClass(styles["quantity-input--error"]);
  });
});
