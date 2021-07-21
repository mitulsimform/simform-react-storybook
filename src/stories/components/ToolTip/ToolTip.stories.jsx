import React from "react";

import { CustomToolTip } from "./ToolTip";

export default {
  title: "Simform/ToolTip",
  component: CustomToolTip,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <CustomToolTip {...args} />;

export const ToolTip = Template.bind({});
ToolTip.args = {
  title: "Some Content title",
  children: "Some Content",
};
