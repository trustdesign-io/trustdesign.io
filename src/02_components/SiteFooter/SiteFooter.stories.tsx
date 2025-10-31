// --------------------------------------------
//
// PageFooter
// -> Stories
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import { Meta, StoryObj } from "@storybook/react";
import SiteFooter, { SiteFooterProps } from "./SiteFooter";
import { Text } from "../02_components/Text"; // Assuming you want to use Text component for children

// --------------------------------------------
// Stories
// --------------------------------------------

// ----- Setup ----- //

const meta: Meta<SiteFooterProps> = {
  title: "Components/SiteFooter",
  component: SiteFooter,
  argTypes: {
    children: {
      control: "text",
      description: "The content inside the SiteFooter component",
    },
  },
};

export default meta;

// ----- Individual Stories ----- //

type Story = StoryObj<PageFooterProps>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Text appearance="body-2" alignment="center">
          © 2024 Your Company. All rights reserved.
        </Text>
        <Text appearance="body-3" alignment="center">
          Privacy Policy | Terms of Service
        </Text>
      </>
    ),
  },
};

export const WithCustomContent: Story = {
  args: {
    children: (
      <>
        <Text appearance="body-2" alignment="center">
          Custom Footer Content
        </Text>
        <Text appearance="body-3" alignment="center">
          Links, legal information, or anything else can go here.
        </Text>
      </>
    ),
  },
};
