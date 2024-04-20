import { getOutPutText } from "./functions.js";

/**
 * Immediately Invoked Function Expression
 */
(() => {
	/**
	 * DOM elements
	 */
	const form = document.querySelector("form");
	const input = document.querySelector("#input");
	const output = document.querySelector("#output");
	const allOutput = document.querySelector("#all-output");
	const allOutputs = document.querySelectorAll(".output");
	const copyButton = document.querySelector("#copy-button");

	/**
	 * Click event listener for the all output checkbox
	 * If it's checked, check all the output checkboxes and disable them
	 * If not, uncheck all the output checkboxes
	 */
	allOutput.addEventListener("click", (e) => {
		// for...of loop to iterate over all the output checkboxes
		// for...of loops considered more readable than forEach:
		// https://biomejs.dev/linter/rules/no-for-each/
		for (const output1 of allOutputs) {
			output1.checked = e.target.checked;
			output1.disabled = !!e.target.checked;
		}
	});

	/**
	 * Click event listener for the output checkboxes
	 * If all the output checkboxes are checked, check the all output checkbox and disable them
	 * If not, uncheck the all output checkbox
	 */
	for (const output1 of allOutputs) {
		output1.addEventListener("click", () => {
			if ([...allOutputs].every((output) => output.checked)) {
				allOutput.checked = true;
				for (const output2 of allOutputs) {
					output2.disabled = true;
				}
			} else {
				allOutput.checked = false;
			}
		});
	}

	/**
	 * Submit event listener for the form
	 */
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		// Get the form data
		const formData = new FormData(form);
		// Convert the form data to an object
		const data = Object.fromEntries(formData.entries());
		// Required to get the output-type values as an array
		data["output-type"] = formData.getAll("output-type");
		// Set the output value
		output.value = getOutPutText(data);
		// If the output-type is empty, check all the output checkboxes and disable them
		if (data["output-type"].length === 0) {
			allOutput.checked = true;
			for (const output1 of allOutputs) {
				output1.checked = true;
				output1.disabled = true;
			}
		}
		setTimeout(() => {
			// Initialize the output element to ensure the label is floating
			new mdb.Input(output.parentElement).init();
		});
	});

	/**
	 * Reset event listener for the form
	 */
	form.addEventListener("reset", () => {
		// Reset the form and set the input value to "Cheese"
		form.reset();
		input.value = "Cheese";
		setTimeout(() => {
			// Initialize the input element to ensure the label is floating
			new mdb.Input(input.parentElement).init();
		});
		// Uncheck all the output checkboxes and enable them
		for (const output1 of allOutputs) {
			output1.disabled = false;
		}
	});

	/**
	 * Click event listener for the copy button
	 */
	copyButton.addEventListener("click", () => {
		// Set the copy button text to "Copied!"
		copyButton.textContent = "Copied!";
		// Copy the output value to the clipboard
		navigator.clipboard.writeText(output.value).then(() => {
			setTimeout(() => {
				// Set the copy button text to "Copy" after 1 second
				copyButton.textContent = "Copy";
			}, 1000);
		});
	});

	// Dispatch the reset event to initialize the input value to "Cheese",
	// ensure the label is floating, uncheck and enable all the output checkboxes
	// and remove anything in the output textarea
	form.dispatchEvent(new Event("reset"));
})();
