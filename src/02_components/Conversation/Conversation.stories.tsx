// --------------------------------------------
//
// Conversation
// -> Storybook story
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import { Meta, StoryFn } from "@storybook/react";
import Conversation from "./Conversation";

// --------------------------------------------
// Meta
// --------------------------------------------

export default {
  title: "Components/Conversation",
  component: Conversation,
  parameters: {
    layout: "centered",
  },
} as Meta;

// --------------------------------------------
// Template
// --------------------------------------------

const Template: StoryFn = args => (
  <Conversation
    sequence={[
      { delay: 1000, duration: 3000 }, // Message 1 appears after 1s, stays for 3s
      { delay: 4000, duration: 3000 }, // Message 2 appears after 4s, stays for 3s
      { delay: 7000, duration: 3000 }, // Message 3 appears after 7s, stays for 3s
      { delay: 10000 }, // Message 4 appears after 10s, stays indefinately
    ]}
  >
    <Conversation.Item>Message 1</Conversation.Item>
    <Conversation.Item>Message 2</Conversation.Item>
    <Conversation.Item>Message 3</Conversation.Item>
    <Conversation.Item>Message 4</Conversation.Item>
  </Conversation>
);

// --------------------------------------------
// Stories
// --------------------------------------------

export const Default = Template.bind({});
Default.args = {};
