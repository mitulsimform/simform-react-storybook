// Slider.test.js

import React from "react";

import { fireEvent, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

//👇 Imports a specific story for the test
import { CustomSlider } from "./Slider.stories";

it(`Move slider changes`, async () => {
  let { container } = await render(<CustomSlider {...CustomSlider.args} />);
  expect(container.querySelector(".ant-slider-track").style.width).toBe("50%");
});
