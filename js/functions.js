/**
 * Convert binary to text
 * @param input
 * @returns {string}
 */
const binaryToText = (input) =>
	input
		.split(" ")
		.map((char) => String.fromCharCode(Number.parseInt(char, 2)))
		.join("");

/**
 * Convert hex to text
 * @param input
 * @returns {string}
 */
const hexToText = (input) =>
	input
		.split(" ")
		.map((char) => String.fromCharCode(Number.parseInt(char, 16)))
		.join("");

/**
 * Convert ascii to text
 * @param input
 * @returns {string}
 */
const ASCIIToText = (input) =>
	input
		.split(" ")
		.map((char) => String.fromCharCode(Number.parseInt(char)))
		.join("");

/**
 * Get the transitory value
 * @param data
 * @returns {Document.input|string|string|any}
 */
const getTransitoryValue = (data) => {
	const formats = {
		binary: () => binaryToText(data.input),
		hex: () => hexToText(data.input),
		ascii: () => ASCIIToText(data.input),
	};
	return (formats[data.inlineRadioOptions] || (() => data.input))();
};

/**
 * Convert text to binary
 * @param input
 * @returns {string}
 */
const textToBinary = (input) =>
	input
		.split("")
		.map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
		.join(" ")
		.trim();

/**
 * Convert text to hex
 * @param input
 * @returns {string}
 */
const textToHex = (input) =>
	input
		.split("")
		.map((char) => char.charCodeAt(0).toString(16).padStart(2, "0"))
		.join(" ")
		.trim();

/**
 * Convert text to ascii
 * @param input
 * @returns {string}
 */
const textToASCII = (input) =>
	input
		.split("")
		.map((char) => `${char.charCodeAt(0)} `)
		.join("")
		.trim();

/**
 * Format the output
 * @param text
 * @param value
 * @returns {`${string}:\r\n${string}\r\n`}
 */
const formatOutput = (text, value) => `${text}:\r\n${value}\r\n`;

/**
 * Get the output text
 * @param data
 * @returns {string}
 */
const getOutPutText = (data) => {
	let returnString = "";
	if (data["output-type"].includes("text")) {
		returnString += formatOutput("Text", getTransitoryValue(data));
	}
	if (data["output-type"].includes("binary")) {
		returnString += formatOutput(
			"Binary",
			textToBinary(getTransitoryValue(data)),
		);
	}
	if (data["output-type"].includes("hex")) {
		returnString += formatOutput(
			"Hexadecimal",
			textToHex(getTransitoryValue(data)),
		);
	}
	if (data["output-type"].includes("ascii")) {
		returnString += formatOutput(
			"ASCII",
			textToASCII(getTransitoryValue(data)),
		);
	}
	if (data["output-type"].includes("all") || data["output-type"].length === 0) {
		returnString += formatOutput("Text", getTransitoryValue(data));
		returnString += formatOutput(
			"Binary",
			textToBinary(getTransitoryValue(data)),
		);
		returnString += formatOutput(
			"Hexadecimal",
			textToHex(getTransitoryValue(data)),
		);
		returnString += formatOutput(
			"ASCII",
			textToASCII(getTransitoryValue(data)),
		);
	}
	return returnString;
};

export {
	binaryToText,
	hexToText,
	ASCIIToText,
	getTransitoryValue,
	textToBinary,
	textToHex,
	textToASCII,
	formatOutput,
	getOutPutText,
};
