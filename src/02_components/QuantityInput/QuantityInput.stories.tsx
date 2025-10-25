// --------------------------------------------
//
// QuantityInput
// -> Stories
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import { Meta, StoryObj } from "@storybook/react";
import QuantityInput, { QuantityInputProps } from "./QuantityInput";

// --------------------------------------------
// Stories
// --------------------------------------------

// ----- Setup ----- //

const meta: Meta<QuantityInputProps> = {
  title: "Components/QuantityInput",
  component: QuantityInput,
  argTypes: {
    value: {
      control: { type: "text" },
      description: "The current value of the quantity input",
    },
    placeholder: {
      control: { type: "text" },
      description: "The placeholder text shown when the input is empty",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disables the input and buttons when true",
    },
    message: {
      control: { type: "text" },
      description: "Displays a helper or error message below the input",
    },
    invalid: {
      control: { type: "boolean" },
      description: "Applies error styling to the input when true",
    },
  },
};

export default meta;

// ----- Template ----- //

const Template = (args: QuantityInputProps) => <QuantityInput {...args} />;

// ----- Individual Stories ----- //

type Story = StoryObj<QuantityInputProps>;

export const Default: Story = {
  args: {
    value: "5",
    disabled: false,
    invalid: false,
    message: "",
  },
};

export const WithMessage: Story = {
  args: {
    value: "2",
    message: "Please select your desired quantity",
  },
};

export const Disabled: Story = {
  args: {
    value: "10",
    disabled: true,
    message: "Cannot modify while disabled",
  },
};

export const Invalid: Story = {
  args: {
    value: "0",
    invalid: true,
    message: "Invalid quantity",
  },
};

export const InteractiveExample: Story = {
  render: Template,
  args: {
    value: "1",
    message: "This is an interactive quantity field",
  },
};
