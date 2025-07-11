export const formatHours = (hours: number) => {
	return hours > 12 ? `${hours - 12} PM` : `${hours} AM`
}
