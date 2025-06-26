export const formatMonth = (timestamp: number) => {
	const date = new Date(timestamp)
	return date.toLocaleString('en', { month: 'short' })
}

export const formatYear = (ts: number) => {
	return new Date(ts).getFullYear().toString()
}
