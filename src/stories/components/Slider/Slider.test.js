// Slider.test.js

import React from "react";

import { fireEvent, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

//👇 Imports a specific story for the test
import { CustomSlider } from "./Slider.stories";

it(`Move slider changes`, async () => {
  await render(<CustomSlider {...CustomSlider.args} />);

  await fireEvent.change(screen.getByTestId("sliderId"), {
    target: { value: 59 },
  });
  expect(Number(screen.getByTestId("sliderId").getAttribute("value"))).toBe(59);
});
