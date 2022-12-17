import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import HelloWorld from "./HelloWorld";

describe('Pruebas del componente HelloWorld', ()=>{

    test('Printado inicial', ()=>{
        // Arrange
        render(<HelloWorld/>)

        // Act
                
        // Assert
        const el = screen.getByText(/Hello/i)
        expect(el).toBeDefined()        
    })

    test('Printado de children', ()=>{
        // Arrange
        const text = 'Esta es una prueba ...'
        const el = <p>{text}</p>
        render(<HelloWorld>{el}</HelloWorld>)

        // Act
                
        // Assert
        const children = screen.queryByText(/Esta es una/i)
        //console.log(children?.innerText)
        expect(children).toBeDefined()
        expect(children?.innerText).toContain('Esta')
    })
})
