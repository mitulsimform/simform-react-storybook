import React from "react";

import { ModalDialogue } from "./ModalDialogue";

export default {
  title: "Example/ModalDialogue",
  component: ModalDialogue,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <ModalDialogue {...args} />;

export const Modal = Template.bind({});
Modal.args = {
  primary: true,
  label: "Button",
  children: "<p>Something</>",
};
