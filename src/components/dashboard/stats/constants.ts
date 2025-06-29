import type { IDashboardCard } from './stats-card'

export const DASHBOARD_CARDS: IDashboardCard[] = [
	{
		label: 'Active Project',
		value: 92,
		bgColor: 'bg-purple-300',
		srcImage: '/images/active-projects.svg',
	},
	{
		label: 'On Going Project',
		value: 35,
		bgColor: 'bg-yellow-300',
		srcImage: '/images/ongoing-projects.svg',
	},
	{
		label: 'Working hours',
		value: '19h 9m',
		bgColor: 'bg-pink-300',
		srcImage: '/images/working-hours.svg',
	},
]
