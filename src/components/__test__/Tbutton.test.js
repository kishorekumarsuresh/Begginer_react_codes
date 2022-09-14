import {  render } from '@testing-library/react';

import Tbutton from "../Tbutton";


it("render button name correctly",() => {
  const {getByTestId}=render(<Tbutton/>)
  expect(getByTestId('button')).toHaveTextContent("click")
})

test("render button  correctly",() => {
  const {getByTestId}=render(<Tbutton/>)
  expect(getByTestId('button')).toBeInTheDocument();
})

it("render text correctly",() => {
  const {getByTestId}=render(<Tbutton/>)
  expect(getByTestId('para')).toHaveTextContent("learn react")
})

