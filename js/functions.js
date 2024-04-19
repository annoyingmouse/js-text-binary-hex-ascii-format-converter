export const binaryToText = (input) =>
	input
		.split(" ")
		.map((char) => String.fromCharCode(Number.parseInt(char, 2)))
		.join("");

export const hexToText = (input) =>
	input
		.split(" ")
		.map((char) => String.fromCharCode(Number.parseInt(char, 16)))
		.join("");

export const asciiToText = (input) =>
	input
		.split(" ")
		.map((char) => String.fromCharCode(Number.parseInt(char)))
		.join("");

export const getTransitoryValue = (data) => {
	const formats = {
		binary: () => binaryToText(data.input),
		hex: () => hexToText(data.input),
		ascii: () => asciiToText(data.input),
	};
	return (formats[data.inlineRadioOptions] || (() => data.input))();
};

export const textToBinary = (input) =>
	input
		.split("")
		.map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
		.join(" ")
		.trim();

export const textToHex = (input) =>
	input
		.split("")
		.map((char) => char.charCodeAt(0).toString(16).padStart(2, "0"))
		.join(" ")
		.trim();

export const textToAscii = (input) =>
	input
		.split("")
		.map((char) => `${char.charCodeAt(0)} `)
		.join("")
		.trim();

export const formatOutput = (text, value) => `${text}:\r\n${value}\r\n`;

export const getOutPutText = (data) => {
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
			"Ascii",
			textToAscii(getTransitoryValue(data)),
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
			"Ascii",
			textToAscii(getTransitoryValue(data)),
		);
	}
	return returnString;
};
