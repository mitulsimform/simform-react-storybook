// Toggle.test.js

import React from "react";

import { fireEvent, render, screen, wait } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

//👇 Imports a specific story for the test
import { ToolTip } from "./ToolTip.stories";

it(`Move slider changes`, async () => {
  await render(<ToolTip {...ToolTip.args} />);
  const element = screen.getByText(/Some Content/i);

  expect(element).toHaveTextContent("Some Content");
});
