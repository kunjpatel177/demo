
import sum from "./sum.js"

// test("adds 2+2 to equal 4", () => {
//     expect(sum(2, 2)).toBe(4)
// })

describe("tests for sum function", () => {
    test("adds 2+2 to equal 4", () => {
        expect(sum(2, 2)).toBe(4)
    })
    test("adds -2+2 to equal 0", () => {
        expect(sum(-2, 2)).toBe(0)
    })
    test("adds 2+10 to equal 12", () => {
        expect(sum(2, 10)).toBe(12)
    })
})