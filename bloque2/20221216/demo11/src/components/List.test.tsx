import { describe, test, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import List from "./List";

describe("Pruebas de componente List", () => {
  const { container } = render(<List />);
  // test.skip('Pintado de lista inicial', ()=>{
  // })

  test("Pintado de lista inicial", () => {
    // Arrange
    // Act
    // Assert
    const results = container.querySelectorAll("li");
    //console.log(results.length)
    expect(results).toBeTruthy();
    expect(results.length).toBeGreaterThanOrEqual(5);
  });

  test("Ocultar la lista", () => {

    const bToggle:any = container.querySelector('button')
    expect(bToggle).toBeDefined()

    fireEvent.click(bToggle)

    const ul = container.querySelector('ul')
    expect(ul).toBeFalsy()
  });
});
