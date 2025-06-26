import type { ChartData, ChartInterval } from '../types'

export const getDataFromInterval = (
	interval: ChartInterval,
	data: ChartData[]
) => {
	if (interval === 'monthly') {
		return data.slice(-7)
	}
	const yearlyMap = new Map()
	data.forEach(item => {
		const year = new Date(item.date).getFullYear()
		if (!yearlyMap.has(year) || yearlyMap.get(year).count < item.count) {
			yearlyMap.set(year, item)
		}
	})
	return Array.from(yearlyMap.values()).sort((a, b) => a.date - b.date)
}
