import {binaryToText, hexToText, asciiToText, textToBinary, textToHex, textToAscii, formatOutput} from '../../js/functions.js'
const chai = window.chai
const expect = chai.expect

// Text to other data types
describe("TextToBinary", () => {
  it("Text translated to Binary", () => {
    expect(textToBinary("Cheese")).to.deep.equal("01000011 01101000 01100101 01100101 01110011 01100101")
  })
})

describe("TextToHex", () => {
  it("Text translated to Hex", () => {
    expect(textToHex("Cheese")).to.deep.equal("43 68 65 65 73 65")
  })
})

describe("TextToAscii", () => {
  it("Text translated to Ascii", () => {
    expect(textToAscii("Cheese")).to.deep.equal("67 104 101 101 115 101")
  })
})

describe("BinaryToText", () => {
  it("Binary translated to Text", () => {
    expect(binaryToText("01000011 01101000 01100101 01100101 01110011 01100101")).to.deep.equal("Cheese")
  })
})

describe("HexToText", () => {
  it("Hex translated to Text", () => {
    expect(hexToText("43 68 65 65 73 65")).to.deep.equal("Cheese")
  })
})

describe("AsciiToText", () => {
  it("Ascii translated to Text", () => {
    expect(asciiToText("67 104 101 101 115 101")).to.deep.equal("Cheese")
  })
})

describe("formatOutput", () => {
  it("Formats output as appropriate", () => {
    expect(formatOutput("Ascii", asciiToText("67 104 101 101 115 101"))).to.deep.equal("Ascii:\r\nCheese\r\n")
  })
})

mocha.checkLeaks();
mocha.run();