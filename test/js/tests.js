import chai from 'https://cdn.skypack.dev/chai'
console.log(chai)

// import {binaryToText, hexToText, asciiToText, textToBinary, textToHex, textToAscii, formatOutput} from './functions.js'
// import mochaDominate from 'https://cdn.skypack.dev/mocha-dominate'
//
// console.log(binaryToText)
// console.log(mochaDominate)


// const chai = window.chai
// const expect = chai.expect
//
// // Text to other data types
// describe("TextToBinary", () => {
//   it("Plain Text translated to Binary", () => {
//     expect(textToBinary("Cheese")).to.deep.equal("01000011 01101000 01100101 01100101 01110011 01100101")
//   })
// })
//
// describe("TextToHex", () => {
//   it("Plain Text translated to Hex", () => {
//     expect(textToHex("Cheese")).to.deep.equal("43 68 65 65 73 65")
//   })
// })
//
// describe("TextToAscii", () => {
//   it("Plain Text translated to Ascii", () => {
//     expect(textToAscii("Cheese")).to.deep.equal("undefinedAscii\r\n67 104 101 101 115 101 ")
//   })
// })
//
// // Binary to other data types
// describe("BinaryToText", () => {
//   it("Binary translated to Plain Text", () => {
//     expect(binaryToText("01000011 01101000 01100101 01100101 01110011 01100101")).to.deep.equal("undefinedText\r\nCheese")
//   })
// })
//
// describe("HexToText", () => {
//   it("Hex translated to Plain Text", () => {
//     expect(hexToText("43 68 65 65 73 65")).to.deep.equal("undefinedText\r\nCheese")
//   })
// })
//
// // Ascii to other data types
// describe("AsciiToText", () => {
//   it("Ascii translated to Plain Text", () => {
//     expect(asciiToText("67 104 101 101 115 101")).to.deep.equal("undefinedText\r\nCheese")
//   })
// })