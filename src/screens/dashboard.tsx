import { DASHBOARD_CARDS } from '@/components/layout/dashboard/constants'
import { DashboardCard } from '@/components/layout/dashboard/dashboard-card'

export const DashboardPage = () => {
	return (
		<div>
			<div className='flex gap-3'>
				<div className='flex flex-col gap-3'>
					{DASHBOARD_CARDS.map(item => (
						<DashboardCard key={item.label} {...item} />
					))}
				</div>
				<div>Charts</div>
			</div>
		</div>
	)
}
