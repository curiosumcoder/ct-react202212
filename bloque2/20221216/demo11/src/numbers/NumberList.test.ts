import { describe, test, expect } from "vitest";
import NumberList from "./NumberList";


// Test suite
describe('Pruebas de clase NumberList',()=>{
    
    test('Generación de la lista',()=>{
        // Arrange
        const nl = new NumberList()
        // Act
        const numbers = nl.GetList()
        // Assert
        expect(numbers.length).toEqual(5)
    })

    test('Validación de impares', ()=>{
        // Arrange
        const numbers = [1,3,5,9]
        // Act
        const result = numbers.reduce((a,b) => a = a && NumberList.IsOdd(b),true)
        // Assert
        expect(result).toBeTruthy()
    })
})