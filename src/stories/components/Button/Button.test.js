// Button.test.js

import React from "react";

import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

//👇 Imports a specific story for the test
import {
  Action,
  Secondary,
  Tertiary,
  Destructive,
  Upgrade,
  Accent,
} from "./Button.stories";

it("Check for Action Button Done", () => {
  render(<Action {...Action.args} />);
  expect(screen.getByRole("button")).toHaveTextContent("Button");
});

it("Check for Secondary Button Done", () => {
  render(<Secondary {...Secondary.args} />);
  expect(screen.getByRole("button")).toHaveTextContent("Button");
});

it("Check for Tertiary Button Done", () => {
  render(<Tertiary {...Tertiary.args} />);
  expect(screen.getByRole("button")).toHaveTextContent("Button");
});

it("Check for Upgrade Button Done", () => {
  render(<Upgrade {...Upgrade.args} />);
  expect(screen.getByRole("button")).toHaveTextContent("Button");
});

it("Check for Destructive Button Done", () => {
  render(<Destructive {...Destructive.args} />);
  expect(screen.getByRole("button")).toHaveTextContent("Button");
});

it("Check for Accent Button Done", () => {
  render(<Accent {...Accent.args} />);
  expect(screen.getByRole("button")).toHaveTextContent("Button");
});
