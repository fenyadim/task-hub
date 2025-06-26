import type { IDashboardCard } from './dashboard-card'

export const DASHBOARD_CARDS: IDashboardCard[] = [
	{
		label: 'Active Project',
		value: 92,
		bgColor: 'purple-300',
		srcImage: '/images/active-projects.svg',
	},
	{
		label: 'On Going Project',
		value: 35,
		bgColor: 'yellow-300',
		srcImage: '/images/ongoing-projects.svg',
	},
	{
		label: 'Working hours',
		value: '19h 9m',
		bgColor: 'pink-300',
		srcImage: '/images/working-hours.svg',
	},
]
