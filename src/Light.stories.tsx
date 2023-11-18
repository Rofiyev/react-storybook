import type { Meta, StoryObj } from "@storybook/react";

import Light from "./Light";

const meta: Meta<typeof Light> = {
  component: Light,
  title: "Example/Light",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["crimson", "yellow", "green"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    variant: "crimson",
  },
};

export const Yellow: Story = {
  args: {
    variant: "yellow",
  },
};

export const Green: Story = {
  args: {
    variant: "green",
  },
};

export const Grouped: Story = {
  render: (args) => (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "column",
        gap: "10px",
        border: "1px solid black",
        padding: "10px",
      }}
    >
      <Light variant="crimson" />
      <Light variant="yellow" />
      <Light variant="green" />
    </div>
  ),
};
