// --------------------------------------------
//
// Shards
// -> Stories
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import { Meta, StoryObj } from "@storybook/react";
import Shards, { ShardsProps } from "./Shards";

import "@/foundation/color/themes/grayscale/color.css";

// --------------------------------------------
// Stories
// --------------------------------------------

// ----- Setup ----- //

const meta: Meta<ShardsProps> = {
  title: "Components/Shards",
  component: Shards,
  argTypes: {
    color: {
      control: "color",
      description: "The color used for the shard",
      defaultValue: "#eeeeee",
    },
    zIndex: {
      control: "number",
      description: "The z-index of the Shards component",
      defaultValue: 0,
    },
    videoSrc: {
      control: "text",
      description: "Optional video source URL for background video",
    },
    videoMuted: {
      control: "boolean",
      description: "Mute the video",
      defaultValue: true,
    },
    videoAutoplay: {
      control: "boolean",
      description: "Autoplay the video",
      defaultValue: true,
    },
    videoLoop: {
      control: "boolean",
      description: "Loop the video",
      defaultValue: true,
    },
  },
};

export default meta;

// ----- Individual Stories ----- //

type Story = StoryObj<ShardsProps>;

export const Default: Story = {
  args: {
    color: "var(--brand-4)",
    contentBackgroundColor: "var(--brand-4)",
  },
};

export const WithVideo: Story = {
  args: {
    color: "var(--brand-10)",
    contentBackgroundColor: "var(--brand-10)",
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
    videoMuted: true,
    videoAutoplay: true,
    videoLoop: true,
  },
};
