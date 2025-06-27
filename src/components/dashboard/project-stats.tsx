import { DASHBOARD_CARDS } from './stats/constants'
import { DashboardCard } from './stats/dashboard-card'

export const ProjectStats = () => {
	return (
		<div className='flex flex-col gap-3'>
			{DASHBOARD_CARDS.map(item => (
				<DashboardCard key={item.label} {...item} />
			))}
		</div>
	)
}
