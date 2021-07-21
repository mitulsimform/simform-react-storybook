import React from "react";

import { CustomSliderAntd } from "./Slider";

export default {
  title: "Simform/Slider",
  component: CustomSliderAntd,
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

const Template = (args) => <CustomSliderAntd {...args} />;

export const CustomSlider = Template.bind({});
CustomSlider.args = { defaultValue: 50 };
