import React from "react";

import { ModalDialogue } from "./ModalDialogue";

export default {
  title: "Example/ModalDialogue",
  component: ModalDialogue,
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

const Template = (args) => <ModalDialogue {...args} />;

export const ModalForHTML = Template.bind({});
ModalForHTML.args = {
  title: "Title",
  htmlContent: "Some Text",
};

// export const ModalForText = Template.bind({});
// ModalForText.args = {
//   title: "Title",
//   textContent: "Test",
// };
