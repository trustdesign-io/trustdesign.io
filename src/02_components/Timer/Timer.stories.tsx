// --------------------------------------------
//
// Timer
// -> Stories
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import { Meta, StoryObj } from "@storybook/react";
import { Timer, TimerProps } from "./Timer";

// --------------------------------------------
// Stories
// --------------------------------------------

// ----- Setup ----- //

const meta: Meta<TimerProps> = {
  title: "Components/Timer",
  component: Timer,
  argTypes: {
    duration: {
      control: { type: "number" },
      description: "The total duration of the timer in seconds",
    },
    reverse: {
      control: { type: "boolean" },
      description: "If true, the timer will count up instead of down",
    },
    running: {
      control: { type: "boolean" },
      description: "Controls whether the timer is running or paused",
    },
    appearance: {
      control: { type: "select" },
      options: [
        "heading-1",
        "heading-2",
        "heading-3",
        "heading-4",
        "heading-5",
        "heading-6",
        "body-1",
        "body-2",
        "body-3",
      ],
      description: "The visual appearance of the timer",
    },
    alignment: {
      control: { type: "select" },
      options: ["left", "right", "center"],
      description: "The alignment of the timer text",
    },
  },
};

export default meta;

// ----- Template for Timer Story ----- //

const Template = (args: TimerProps) => <Timer {...args} />;

// ----- Individual Stories ----- //

type Story = StoryObj<TimerProps>;

export const Default: Story = {
  render: Template,
  args: {
    duration: 3600, // 1 hour
    reverse: false,
    running: true,
    onComplete: () => console.log("Timer has completed!"), // Console log on complete
  },
};

export const CountUp: Story = {
  render: Template,
  args: {
    duration: 0, // Start from 0
    reverse: true,
    running: true,
    onComplete: () => console.log("Count-up has completed!"), // Console log on complete
  },
};
