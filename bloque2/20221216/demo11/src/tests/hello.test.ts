import { test, expect } from "vitest";

// function sum(a,b,c) {
//     return a+b+c
// }
function sum(...nums:number[]) {
    return nums.reduce((a,b) => a+b, 0)
}

test('1 + 1', ()=>{
    // Arrange
    const a = 1
    const b = 1
    
    // Act
    const result = sum(a,b)

    // Assert
    expect(result).toEqual(2)
})

test('Sumar 3 números', ()=>{
    // Arrange
    
    // Act
    const result = sum(1,2,3)

    // Assert
    expect(result).toEqual(6)
})

test('Sumar 4 números', ()=>{
    // Arrange
    
    // Act
    const result = sum(1,2,3,4)

    // Assert
    expect(result).toEqual(10)
})