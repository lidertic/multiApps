export function toInteger(value: any): number {
	return parseInt(`${value}`, 10);
}

export function toString(value: any): string {
	return value !== undefined && value !== null ? `${value}` : '';
}

export function getValueInRange(value: number, max: number, min = 0): number {
	return Math.max(Math.min(value, max), min);
}

export function isString(value: any): value is string {
	return typeof value === 'string';
}

export function isNumber(value: any): value is number {
	return !isNaN(toInteger(value));
}

export function isInteger(value: any): value is number {
	return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}

export function isDefined(value: any): boolean {
	return value !== undefined && value !== null;
}

export function padNumber(value: number) {
	if (isNumber(value)) {
		return `0${value}`.slice(-2);
	} else {
		return '';
	}
}

export function regExpEscape(text) {
	return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

export function isValidDate(dateString) {
	// First check for the pattern
	var regex_date = /^\d{1,2}\-\d{1,2}\-\d{4}$/;

	if (!regex_date.test(dateString)) {
		return false;
	}

	// Parse the date parts to integers
	var parts = dateString.split('-');
	var day = parseInt(parts[0], 10);
	var month = parseInt(parts[1], 10);
	var year = parseInt(parts[2], 10);

	// Check the ranges of month and year
	if (year < 1000 || year > 3000 || month == 0 || month > 12) {
		return false;
	}

	var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

	// Adjust for leap years
	if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
		monthLength[1] = 29;
	}

	// Check the range of the day
	return day > 0 && day <= monthLength[month - 1];
}

export function dateToCad(date: any): string {
	const _result = `${isNumber(date.day) ? padNumber(date.day) : ''}-${
		isNumber(date.month) ? padNumber(date.month) : ''
	}-${date.year}`;
	return _result;
}

export function dateToCadExt(date: Date): string {
	const _result = `${isNumber(date.getDate()) ? padNumber(date.getDate()) : ''}-${
		isNumber(date.getMonth() + 1) ? padNumber(date.getMonth() + 1) : ''
	}-${date.getFullYear()}`;
	return _result;
}

export function dateToCadNormalize(date: Date, hour: Date): string {
	const _result = `${date.getFullYear()}${isNumber(date.getMonth() + 1) ? padNumber(date.getMonth() + 1) : ''}${
		isNumber(date.getDate()) ? padNumber(date.getDate()) : ''
	}${isNumber(hour.getHours()) ? padNumber(hour.getHours()) : ''}${
		isNumber(hour.getMinutes()) ? padNumber(hour.getMinutes()) : ''
	}`;
	return _result;
}
