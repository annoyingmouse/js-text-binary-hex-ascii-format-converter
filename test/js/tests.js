/**
 * Test Suite for functions.js
 */
import {
	binaryToText,
	hexToText,
	ASCIIToText,
	textToBinary,
	textToHex,
	textToASCII,
	getTransitoryValue,
	formatOutput,
	getOutPutText,
} from "../../js/functions.js";

const chai = window.chai;
const expect = chai.expect;

/**
 * Test Suite for textToBinary
 */
describe("textToBinary", () => {
	it("Text translated to Binary", () => {
		expect(textToBinary("Cheese")).to.deep.equal(
			"01000011 01101000 01100101 01100101 01110011 01100101",
		);
	});
});

/**
 * Test Suite for textToHex
 */
describe("textToHex", () => {
	it("Text translated to Hex", () => {
		expect(textToHex("Cheese")).to.deep.equal("43 68 65 65 73 65");
	});
});

/**
 * Test Suite for textToAscii
 */
describe("textToAscii", () => {
	it("Text translated to Ascii", () => {
		expect(textToASCII("Cheese")).to.deep.equal("67 104 101 101 115 101");
	});
});

/**
 * Test Suite for binaryToText
 */
describe("binaryToText", () => {
	it("Binary translated to Text", () => {
		expect(
			binaryToText("01000011 01101000 01100101 01100101 01110011 01100101"),
		).to.deep.equal("Cheese");
	});
});

/**
 * Test Suite for hexToText
 */
describe("hexToText", () => {
	it("Hex translated to Text", () => {
		expect(hexToText("43 68 65 65 73 65")).to.deep.equal("Cheese");
	});
});

/**
 * Test Suite for ASCIIToText
 */
describe("ASCIIToText", () => {
	it("Ascii translated to Text", () => {
		expect(ASCIIToText("67 104 101 101 115 101")).to.deep.equal("Cheese");
	});
});

/**
 * Test Suite for getTransitoryValue
 */
describe("getTransitoryValue", () => {
	it("Text to Text", () => {
		expect(
			getTransitoryValue({ inlineRadioOptions: "text", input: "Cheese" }),
		).to.deep.equal("Cheese");
	});
	it("Binary to Text", () => {
		expect(
			getTransitoryValue({
				inlineRadioOptions: "binary",
				input: "01000011 01101000 01100101 01100101 01110011 01100101",
			}),
		).to.deep.equal("Cheese");
	});
	it("Hex to Text", () => {
		expect(
			getTransitoryValue({
				inlineRadioOptions: "hex",
				input: "43 68 65 65 73 65",
			}),
		).to.deep.equal("Cheese");
	});
	it("Ascii to Text", () => {
		expect(
			getTransitoryValue({
				inlineRadioOptions: "ascii",
				input: "67 104 101 101 115 101",
			}),
		).to.deep.equal("Cheese");
	});
});

/**
 * Test Suite for formatOutput
 */
describe("formatOutput", () => {
	it("Formats Text", () => {
		expect(formatOutput("Text", "Cheese")).to.deep.equal("Text:\r\nCheese\r\n");
	});
});

/**
 * Test Suite for getOutPutText
 */
describe("getOutPutText", () => {
	it("Formats Text as Binary", () => {
		expect(
			getOutPutText({
				inlineRadioOptions: "text",
				input: "Cheese",
				"output-type": ["binary"],
			}),
		).to.deep.equal(
			"Binary:\r\n01000011 01101000 01100101 01100101 01110011 01100101\r\n",
		);
	});
	it("Formats Binary as Text", () => {
		expect(
			getOutPutText({
				inlineRadioOptions: "binary",
				input: "01000011 01101000 01100101 01100101 01110011 01100101",
				"output-type": ["text"],
			}),
		).to.deep.equal("Text:\r\nCheese\r\n");
	});
	it("Formats Binary as Hexadecimal", () => {
		expect(
			getOutPutText({
				inlineRadioOptions: "binary",
				input: "01000011 01101000 01100101 01100101 01110011 01100101",
				"output-type": ["hex"],
			}),
		).to.deep.equal("Hexadecimal:\r\n43 68 65 65 73 65\r\n");
	});
	it("Formats Hexadecimal as Ascii", () => {
		expect(
			getOutPutText({
				inlineRadioOptions: "binary",
				input: "01000011 01101000 01100101 01100101 01110011 01100101",
				"output-type": ["ascii"],
			}),
		).to.deep.equal("ASCII:\r\n67 104 101 101 115 101\r\n");
	});
	it("Formats Ascii as Text", () => {
		expect(
			getOutPutText({
				inlineRadioOptions: "ascii",
				input: "67 104 101 101 115 101",
				"output-type": ["text"],
			}),
		).to.deep.equal("Text:\r\nCheese\r\n");
	});
});

mocha.checkLeaks();
mocha.run();