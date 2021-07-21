import React from "react";

import { Button } from "./Button";

export default {
  title: "Simform/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Button {...args} />;

export const Action = Template.bind({});
Action.args = {
  label: "Button",
  typeOfButton: "action",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
  typeOfButton: "secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: "Button",
  typeOfButton: "tertiary",
};

export const Upgrade = Template.bind({});
Upgrade.args = {
  label: "Button",
  typeOfButton: "upgrade",
};

export const Destructive = Template.bind({});
Destructive.args = {
  label: "Button",
  typeOfButton: "destructive",
};

export const Accent = Template.bind({});
Accent.args = {
  label: "Button",
  typeOfButton: "accent",
};
