import {
	LastTasks,
	ProjectChart,
	ProjectStats,
	TasksTimeline,
} from '@/components/dashboard'

export const DashboardPage = () => {
	return (
		<div className='grid grid-cols-1 gap-5 max-w-[1080px]'>
			<div className='flex gap-5'>
				<ProjectStats />
				<ProjectChart />
			</div>
			<LastTasks />
			<TasksTimeline />
		</div>
	)
}
