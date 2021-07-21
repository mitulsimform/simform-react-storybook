import React from "react";

import { Button } from "./Button";

export default {
  title: "Simform/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  parameters: {
    layout: "centered",
  },
};

const Template = (args) => <Button {...args} />;

export const Action = Template.bind({});
Action.args = {
  label: "Button",
  typeOfButton: "action",
  size: "small",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
  typeOfButton: "secondary",
  size: "small",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: "Button",
  typeOfButton: "tertiary",
  size: "small",
};

export const Upgrade = Template.bind({});
Upgrade.args = {
  label: "Button",
  typeOfButton: "upgrade",
  size: "small",
};

export const Destructive = Template.bind({});
Destructive.args = {
  label: "Button",
  typeOfButton: "destructive",
  size: "small",
};

export const Accent = Template.bind({});
Accent.args = {
  label: "Button",
  typeOfButton: "accent",
  size: "small",
};
