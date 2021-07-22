import React from "react";
import "antd/dist/antd.css";
import { Toggle } from "./Toggle";

export default {
  title: "Simform/Toggle",
  component: Toggle,
  argTypes: {},
  parameters: {
    layout: "centered",
  },
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Toggle {...args} />;

export const CustomToggle = Template.bind({});
CustomToggle.args = {
  defaultValue: "true",
};
