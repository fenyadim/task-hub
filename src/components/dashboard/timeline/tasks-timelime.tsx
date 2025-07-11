'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { taskStore } from '@/stores/task.store'
import { observer } from 'mobx-react-lite'
import { formatHours } from './format-hours.utils'
import { TimelineItem } from './timeline-item'

const HOURS = Array.from({ length: 9 }, (_, i) => i + 9)

export const TasksTimeline = observer(() => {
	const todayTasks = taskStore.todayTasks
	const users = [...new Set(todayTasks.map(task => task.users).flat())]

	return (
		<Card>
			<CardHeader>
				<div className='flex justify-between'>
					<CardTitle className='text-xl font-medium'>Today tasks</CardTitle>
					{/* <div className='*:data-[slot=avatar]:ring-sidebar flex -space-x-2 *:data-[slot=avatar]:ring-3 *:data-[slot=avatar]:grayscale'>
						{users.map(({ id, name, imagePath }) => (
							<UserAvatar key={id} name={name} src={imagePath} />
						))}
					</div> */}
				</div>
			</CardHeader>
			<CardContent className='h-72'>
				<div className='grid grid-cols-9'>
					{HOURS.map(hour => (
						<div key={hour}>
							<div>{formatHours(hour)}</div>
						</div>
					))}
				</div>
				<div className='relative w-full'>
					{todayTasks.map((task, index) => (
						<TimelineItem key={task.id} task={task} itemIndex={index} />
					))}
				</div>
			</CardContent>
		</Card>
	)
})
