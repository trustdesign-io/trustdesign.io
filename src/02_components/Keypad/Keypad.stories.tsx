// --------------------------------------------
//
// Keypad.stories.tsx
// -> Storybook Story
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import { Meta, StoryFn } from "@storybook/react";
import Keypad from "./Keypad";

// --------------------------------------------
// Story Config
// --------------------------------------------

const meta: Meta<typeof Keypad> = {
  title: "Components/Keypad",
  component: Keypad,
  argTypes: {
    sequence: {
      control: { type: "array" as const },
      description: "Sequence of keys to activate in order",
    },
    interval: {
      control: { type: "number" as const },
      description: "Interval in milliseconds for sequence updates",
    },
  },
};

export default meta;

// --------------------------------------------
// Template
// --------------------------------------------

const Template: StoryFn<typeof Keypad> = args => (
  <div style={{ maxWidth: "400px", margin: "100px auto" }}>
    <Keypad sequence={args.sequence} interval={args.interval} isRunning>
      <Keypad.Item index={1} onClick={() => console.log("Clicked 1")}>
        1
      </Keypad.Item>
      <Keypad.Item index={2} onClick={() => console.log("Clicked 2")}>
        2
      </Keypad.Item>
      <Keypad.Item index={3} onClick={() => console.log("Clicked 3")} active>
        3
      </Keypad.Item>
      <Keypad.Item index={4} onClick={() => console.log("Clicked 4")}>
        4
      </Keypad.Item>
      <Keypad.Item index={5} onClick={() => console.log("Clicked 5")}>
        5
      </Keypad.Item>
      <Keypad.Item index={6} onClick={() => console.log("Clicked 6")}>
        6
      </Keypad.Item>
      <Keypad.Item index={7} onClick={() => console.log("Clicked 7")}>
        7
      </Keypad.Item>
      <Keypad.Item index={8} onClick={() => console.log("Clicked 8")}>
        8
      </Keypad.Item>
      <Keypad.Item index={9} onClick={() => console.log("Clicked 9")}>
        9
      </Keypad.Item>
    </Keypad>
  </div>
);

// --------------------------------------------
// Stories
// --------------------------------------------

export const Default = Template.bind({});
Default.args = { interval: 400 };

export const WithSequence = Template.bind({});
WithSequence.args = {
  sequence: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  interval: 400,
};
