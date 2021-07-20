import React from 'react';

import { ModalDialogue } from './ModalDialogue';

export default {
  title: 'Example/ModalDialogue',
  component: ModalDialogue,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <ModalDialogue {...args} />;

export const Modal = Template.bind({});
Modal.args = {
  primary: true,
  label: 'Button',
  children:"<p>Something</>"
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button1',
// };
// export const XLarge = Template.bind({});
// XLarge.args = {
//   size: 'large',
//   label: 'Button2',
// };
// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button3',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button4',
//   backgroundColor:'#0DBD95'
// };
