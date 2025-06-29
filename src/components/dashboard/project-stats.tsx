import { DASHBOARD_CARDS } from './stats/constants'
import { StatsCard } from './stats/stats-card'

export const ProjectStats = () => {
	return (
		<div className='flex flex-col gap-3'>
			{DASHBOARD_CARDS.map(item => (
				<StatsCard key={item.label} {...item} />
			))}
		</div>
	)
}
