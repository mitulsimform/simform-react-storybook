// Slider.test.js

import React from "react";

import { fireEvent, render, screen, wait } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

//👇 Imports a specific story for the test
import { CustomToggle } from "./Toggle.stories";

it(`Move slider changes`, async () => {
  await render(<CustomToggle {...CustomToggle.args} />);
  await fireEvent.click(screen.getByRole("switch"), {
    target: { checked: "false" },
  });
  expect(screen.getByRole("switch").getAttribute("aria-checked")).toBe("false");
});
