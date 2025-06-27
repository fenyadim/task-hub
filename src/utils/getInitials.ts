export const getInitials = (name: string): string => {
	return name
		.split(' ')
		.filter(Boolean)
		.map(word => word[0])
		.join('')
		.toUpperCase()
}
