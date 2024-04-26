export function formattedDurationFromSeconds(seconds: number): string {
	const minutes = Math.trunc(seconds / 60);
	const remainingSeconds = seconds % 60;
	if (minutes === 0) {
		return `${seconds} sec`;
	} else {
		return `${minutes} min ${remainingSeconds} sec`;
	}
}
