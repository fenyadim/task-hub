import {
	DASHBOARD_CARDS,
	DashboardCard,
	ProjectChart,
} from '@/components/dashboard'

export const DashboardPage = () => {
	return (
		<div>
			<div className='flex gap-5'>
				<div className='flex flex-col gap-3'>
					{DASHBOARD_CARDS.map(item => (
						<DashboardCard key={item.label} {...item} />
					))}
				</div>
				<ProjectChart />
			</div>
		</div>
	)
}
