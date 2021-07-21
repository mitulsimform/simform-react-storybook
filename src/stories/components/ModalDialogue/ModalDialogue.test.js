// ModalDialogue.test.js

import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

//👇 Imports a specific story for the test
import { ModalForHTML } from "./ModalDialogue.stories";

it("renders the button in the primary state", async () => {
  const onShowModalClick = jest.fn();
  await render(
    <ModalForHTML {...ModalForHTML.args} onShowModalClick={onShowModalClick} />
  );
  fireEvent.click(screen.getByText(/Open Modal/i));
  const element = screen.queryByTestId("modalDialogue");
  expect(element).toHaveTextContent("Some Text");
});
