// --------------------------------------------
//
// TextInput
// -> Component
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import { ChangeEvent, useState } from "react";
import clsx from "clsx";
import styles from "./TextInput.module.css";

import { Layout } from "../Layout";
import { Text } from "../Text";

// --------------------------------------------
// Types
// --------------------------------------------

export interface TextInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: "text" | "password" | "email";
  className?: string;
  disabled?: boolean;
  message?: string;
  invalid?: boolean;
  appearance?: "body-1" | "body-2" | "body-3";
}

// --------------------------------------------
// Component
// --------------------------------------------

function TextInput({
  value,
  onChange,
  placeholder = "",
  type = "text",
  disabled = false,
  message,
  invalid = false,
  appearance = "body-2",
}: TextInputProps) {
  // Provide local state to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Trigger onChange whenever the input value changes
  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    onChange(e);
  }

  // Toggle whether password is shown as plain text or obscured
  function toggleShowPassword() {
    setShowPassword((prev) => !prev);
  }

  // Combine class names based on props
  const inputClasses = clsx(
    styles["text-input"],
    styles[`text-input--${appearance}`],
    {
      [styles["text-input--disabled"]]: disabled,
      [styles["text-input--error"]]: invalid,
    },
  );

  // Return the component’s markup
  return (
    <div data-component="TextInput" className={styles["text-input-wrapper"]}>
      <div className={styles["input--icon"]}>
        <input
          className={inputClasses}
          type={type === "password" && !showPassword ? "password" : "text"}
          value={value}
          onChange={handleInputChange}
          placeholder={placeholder}
          disabled={disabled}
        />
        {type === "password" && (
          <button
            type="button"
            className={styles["input__password-button"]}
            onClick={toggleShowPassword}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}
      </div>
      <Layout topGutter="sm">
        {message && <Text appearance="body-3">{message}</Text>}
      </Layout>
    </div>
  );
}

// --------------------------------------------
// Export
// --------------------------------------------

export default TextInput;
