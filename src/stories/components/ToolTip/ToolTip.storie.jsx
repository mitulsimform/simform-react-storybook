import React from "react";
import { CustomToolTip } from "./ToolTip";

export default {
  title: "Simform/ToolTip",
  component: CustomToolTip,
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

const Template = (args) => <CustomToolTip {...args} />;

export const ToolTip = Template.bind({});
ToolTip.args = {};
