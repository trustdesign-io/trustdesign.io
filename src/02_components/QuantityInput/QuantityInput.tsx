// --------------------------------------------
//
// QuantityInput
// -> Component
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import { ChangeEvent } from "react";
import clsx from "clsx";
import styles from "./QuantityInput.module.css";

import { Button } from "../../02_components/Button";
import { TextInput } from "../../02_components/TextInput";

// --------------------------------------------
// Types
// --------------------------------------------

export interface QuantityInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  message?: string;
  invalid?: boolean;
  appearance?: "body-1" | "body-2" | "body-3";
}

// --------------------------------------------
// Component
// --------------------------------------------

function QuantityInput({
  value,
  onChange,
  disabled = false,
  message,
  invalid = false,
  appearance = "body-2",
}: QuantityInputProps) {
  // Convert the incoming string to a number for increment/decrement operations
  const numericValue = parseInt(value, 10) || 0;

  // Pass the ChangeEvent back up via onChange
  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    onChange(e);
  }

  // Creates a synthetic event for incrementing by 1
  function handleIncrement() {
    if (disabled) return;
    const nextValue = numericValue + 1;
    const syntheticEvent = {
      target: { value: nextValue.toString() },
    } as ChangeEvent<HTMLInputElement>;
    onChange(syntheticEvent);
  }

  // Creates a synthetic event for decrementing by 1
  function handleDecrement() {
    if (disabled) return;
    const nextValue = numericValue - 1;
    const syntheticEvent = {
      target: { value: nextValue.toString() },
    } as ChangeEvent<HTMLInputElement>;
    onChange(syntheticEvent);
  }

  const classes = clsx(
    styles["quantity-input"],
    styles[`quantity-input--${appearance}`],
    {
      [styles["quantity-input--disabled"]]: disabled,
      [styles["quantity-input--error"]]: invalid,
    }
  );

  // --------------------------------------------
  // Render
  // --------------------------------------------

  return (
    <div
      data-component="QuantityInput"
      className={styles["quantity-input-wrapper"]}
    >
      {/* Decrement Button */}
      <Button
        onClick={handleDecrement}
        disabled={disabled}
        icon="subtract"
        iconOnly
      >
        Decrement
      </Button>

      {/* Input Field using TextInput */}
      <TextInput
        value={value}
        onChange={handleInputChange}
        type="text"
        className={classes}
        disabled={disabled}
        invalid={invalid}
        appearance={appearance}
      />

      {/* Increment Button */}
      <Button onClick={handleIncrement} disabled={disabled} icon="add" iconOnly>
        Increment
      </Button>

      {message && <div className={styles["input__message"]}>{message}</div>}
    </div>
  );
}

// --------------------------------------------
// Export
// --------------------------------------------

export default QuantityInput;
