export type ChartInterval = 'yearly' | 'monthly'

export type SelectIntervalData = {
	value: ChartInterval
	label: string
}

export type ChartData = {
	date: number
	count: number
}
