import { getOutPutText } from "./functions.js";

(() => {
	const form = document.querySelector("form");
	const input = document.querySelector("#input");
	const output = document.querySelector("#output");
	const allOutput = document.querySelector("#all-output");
	const allOutputs = document.querySelectorAll(".output");
	const copyButton = document.querySelector("#copy-button");

	allOutput.addEventListener("click", (e) => {
		for (const output1 of allOutputs) {
			output1.checked = e.target.checked;
			output1.disabled = !!e.target.checked;
		}
	});

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

	form.addEventListener("submit", (e) => {
		e.preventDefault();
		const formData = new FormData(form);
		const data = Object.fromEntries(formData.entries());
		data["output-type"] = formData.getAll("output-type");
		output.value = getOutPutText(data);
		if (data["output-type"].length === 0) {
			allOutput.checked = true;
			for (const output1 of allOutputs) {
				output1.checked = true;
				output1.disabled = true;
			}
		}
		setTimeout(() => {
			new mdb.Input(output.parentElement).init();
		});
	});

	form.addEventListener("reset", () => {
		form.reset();
		input.value = "Cheese";
		setTimeout(() => {
			new mdb.Input(input.parentElement).init();
		});
		for (const output1 of allOutputs) {
			output1.disabled = false;
		}
	});

	copyButton.addEventListener("click", () => {
		copyButton.textContent = "Copied!";
		navigator.clipboard.writeText(output.value).then(() => {
			setTimeout(() => {
				copyButton.textContent = "Copy";
			}, 1000);
		});
	});
})();
