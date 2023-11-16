// import necessary react testing library helpers here
// import the Counter component here
import {render, fireEvent, screen} from "@testing-library/react"
import Counter from "../components/Counter"

beforeEach(() => {
  // Render the Counter component here
  render(<Counter/>);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const countValue = screen.getByText("Counter");
  expect(countValue.textContent).toEqual("Counter");
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const countValue = screen.getByTestId("count");
  expect(Number(countValue.textContent)).toEqual(0);
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const countValue = screen.getByText("+");
  const countValue2 = screen.getByTestId("count");
  fireEvent.click(countValue);
  expect(Number(countValue2.textContent)).toEqual(1);
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const countValue = screen.getByText("-");
  const countValue2 = screen.getByTestId("count");
  fireEvent.click(countValue);
  expect(Number(countValue2.textContent)).toEqual(-1);
});
