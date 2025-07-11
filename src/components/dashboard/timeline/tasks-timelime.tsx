'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { UserAvatar } from '@/components/ui/user-avatar'
import { taskStore } from '@/stores/task.store'
import { observer } from 'mobx-react-lite'

const HOURS = Array.from({ length: 9 }, (_, i) => i + 8)

export const TasksTimeline = observer(() => {
	const todayTasks = taskStore.todayTasks
	const users = [...new Set(todayTasks.map(task => task.users).flat())]

	console.log(todayTasks.map(task => task.users).flat())
	console.log(new Set(todayTasks.map(task => task.users).flat()))

	return (
		<Card>
			<CardHeader>
				<div className='flex justify-between'>
					<CardTitle className='text-xl font-medium'>Today tasks</CardTitle>
					<div className='*:data-[slot=avatar]:ring-sidebar flex -space-x-2 *:data-[slot=avatar]:ring-3 *:data-[slot=avatar]:grayscale'>
						{users.map(({ id, name, imagePath }) => (
							<UserAvatar key={id} name={name} src={imagePath} />
						))}
					</div>
				</div>
			</CardHeader>
			<CardContent className='h-72'>
				<div className='grid grid-cols-9 justify-items-center'>
					{HOURS.map(hour => (
						<div key={hour}>
							<div className='flex items-center gap-2'>
								{hour > 12 ? `${hour - 12} PM` : `${hour} AM`}
							</div>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	)
})
