// --------------------------------------------
//
// Carousel
// -> Stories
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import { Meta, StoryFn } from "@storybook/react";
import { Carousel, CarouselProps, CarouselItem } from "../Carousel";
import { Card } from "../Card";

// ----- Setup ----- //

const meta: Meta = {
  title: "Components/Carousel",
  component: Carousel,
  argTypes: {
    label: { control: "text" },
    showControls: { control: "boolean" },
    showPagination: { control: "boolean" },
    spaceBetween: { control: "number" },
    slidesPerViewMobile: { control: "number" },
    slidesPerViewTablet: { control: "number" },
    slidesPerViewDesktop: { control: "number" },
  },
  args: {
    label: "Carousel",
    showControls: true,
    showPagination: true,
    spaceBetween: 16,
    slidesPerViewMobile: 1.15,
    slidesPerViewTablet: 2,
    slidesPerViewDesktop: 3,
  },
};

export default meta;

// --------------------------------------------
// Fixtures
// --------------------------------------------

const items: CarouselItem[] = [
  {
    id: "1",
    title: "Trust Signal: Clarity",
    body: "Say what happens, when it matters.",
  },
  {
    id: "2",
    title: "Predictability",
    body: "Consistency builds reliable mental models.",
  },
  {
    id: "3",
    title: "Consent",
    body: "Balanced choices, reversible decisions.",
  },
  {
    id: "4",
    title: "Safety",
    body: "Prevent irreversible mistakes and warn early.",
  },
  {
    id: "5",
    title: "Data Dignity",
    body: "Treat data as borrowed, not owned.",
  },
];

// ----- Individual Stories ----- //

// Template for individual stories
const Template: StoryFn<CarouselProps> = (args: CarouselProps) => (
  <div style={{ maxWidth: 960 }}>
    <Carousel {...args} items={items} />
  </div>
);

// Default story
export const Default: StoryFn<CarouselProps> = Template.bind({});
Default.args = {};

// No pagination story
export const NoPagination: StoryFn<CarouselProps> = Template.bind({});
NoPagination.args = {
  showPagination: false,
};

// No controls story
export const NoControls: StoryFn<CarouselProps> = Template.bind({});
NoControls.args = {
  showControls: false,
};

// Single slide view story (useful for narrow layouts)
export const SingleColumn: StoryFn<CarouselProps> = Template.bind({});
SingleColumn.args = {
  slidesPerViewMobile: 1,
  slidesPerViewTablet: 1,
  slidesPerViewDesktop: 1,
};

// Custom render story (example using Card)
export const CustomRender: StoryFn<CarouselProps> = (args: CarouselProps) => (
  <div style={{ maxWidth: 960 }}>
    <Carousel
      {...args}
      items={items}
      renderSlide={(item) => (
        <Card>
          <Card.Body>
            <div style={{ fontWeight: 600, marginBottom: 8 }}>{item.title}</div>
            <div style={{ opacity: 0.82 }}>{item.body}</div>
          </Card.Body>
        </Card>
      )}
    />
  </div>
);

CustomRender.storyName = "Custom Render";
