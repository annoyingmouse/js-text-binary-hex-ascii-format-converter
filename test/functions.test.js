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
} from "../js/functions.js";

/**
 * Test for textToBinary
 */
test("textToBinary", () => {
	expect(textToBinary("Cheese")).toBe(
		"01000011 01101000 01100101 01100101 01110011 01100101",
	);
});

/**
 * Test for textToHex
 */
test("textToHex", () => {
	expect(textToHex("Cheese")).toBe("43 68 65 65 73 65");
});

/**
 * Test for textToASCII
 */
test("textToAscii", () => {
	expect(textToASCII("Cheese")).toBe("67 104 101 101 115 101");
});

/**
 * Test for binaryToText
 */
test("binaryToText", () => {
	expect(
		binaryToText("01000011 01101000 01100101 01100101 01110011 01100101"),
	).toBe("Cheese");
});

/**
 * Test for hexToText
 */
test("hexToText", () => {
	expect(hexToText("43 68 65 65 73 65")).toBe("Cheese");
});

/**
 * Test for ASCIIToText
 */
test("ASCIIToText", () => {
	expect(ASCIIToText("67 104 101 101 115 101")).toBe("Cheese");
});

/**
 * Test for getTransitoryValue
 */
test("getTransitoryValue", () => {
	expect(
		getTransitoryValue({ inlineRadioOptions: "text", input: "Cheese" }),
	).toBe("Cheese");
	expect(
		getTransitoryValue({
			inlineRadioOptions: "binary",
			input: "01000011 01101000 01100101 01100101 01110011 01100101",
		}),
	).toBe("Cheese");
	expect(
		getTransitoryValue({
			inlineRadioOptions: "hex",
			input: "43 68 65 65 73 65",
		}),
	).toBe("Cheese");
	expect(
		getTransitoryValue({
			inlineRadioOptions: "ascii",
			input: "67 104 101 101 115 101",
		}),
	).toBe("Cheese");
});

/**
 * Test for formatOutput
 */
test("formatOutput", () => {
	expect(formatOutput("Text", "Cheese")).toBe("Text:\r\nCheese\r\n");
});

/**
 * Test for getOutPutText
 */
test("getOutPutText", () => {
	expect(
		getOutPutText({
			inlineRadioOptions: "text",
			input: "Cheese",
			"output-type": ["binary"],
		}),
	).toBe(
		"Binary:\r\n01000011 01101000 01100101 01100101 01110011 01100101\r\n",
	);
	expect(
		getOutPutText({
			inlineRadioOptions: "binary",
			input: "01000011 01101000 01100101 01100101 01110011 01100101",
			"output-type": ["text"],
		}),
	).toBe("Text:\r\nCheese\r\n");
	expect(
		getOutPutText({
			inlineRadioOptions: "binary",
			input: "01000011 01101000 01100101 01100101 01110011 01100101",
			"output-type": ["hex"],
		}),
	).toBe("Hexadecimal:\r\n43 68 65 65 73 65\r\n");
	expect(
		getOutPutText({
			inlineRadioOptions: "binary",
			input: "01000011 01101000 01100101 01100101 01110011 01100101",
			"output-type": ["ascii"],
		}),
	).toBe("ASCII:\r\n67 104 101 101 115 101\r\n");
	expect(
		getOutPutText({
			inlineRadioOptions: "ascii",
			input: "67 104 101 101 115 101",
			"output-type": ["text"],
		}),
	).toBe("Text:\r\nCheese\r\n");
});
