import { extractCustomSeparator } from './utils/extractCustomSeparator';

export class Parser {
	constructor(input, separators) {
		this.input = input;
		this.separators = separators;
	}

	combineSeparators(customSeparator) {
		const separators = [...this.separators];
		if (customSeparator) {
			separators.push(customSeparator);
		}
		return separators;
	}

	extractNumbersPart() {
		const separatorIndex = this.input.indexOf('\n');
		if (separatorIndex === -1) return this.input;
		return this.input.slice(separatorIndex + 1);
	}

	parse() {
		const customSeparator = extractCustomSeparator();
		const separators = this.combineSeparators(customSeparator);
		const numbersPart = this.extractNumbersPart();

		if (numbersPart === '') {
			return 0;
		}

		if (separators.length === 0) {
			return [numbersPart];
		}

		const regex = new RegExp(separators.map(this.escapeRegExp).join('|'));
		return numbersPart.split(regex);
	}

	escapeRegExp(string) {
		return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}
}
