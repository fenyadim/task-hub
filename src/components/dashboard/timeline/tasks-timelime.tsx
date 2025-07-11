'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { UserAvatar } from '@/components/ui/user-avatar'
import { taskStore } from '@/stores/task.store'
import { getHours, getMinutes } from 'date-fns'
import { observer } from 'mobx-react-lite'
import { ICON_MAP } from '../task/constants/task-icons.data'
import { formatHours } from './format-hours.utils'

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
					{todayTasks.map(task => {
						const start = getHours(task.dueDate.startTime)
						const end = getHours(task.dueDate.endTime)

						const startMin = getMinutes(task.dueDate.startTime)
						const endMin = getMinutes(task.dueDate.endTime)

						const startPosition =
							(((start - 9) * 60 + startMin) / ((17 - 9) * 60)) * 100
						const endPosition =
							(((end - 9) * 60 + endMin) / ((17 - 9) * 60)) * 100
						const widthPercent = endPosition - startPosition

						const Icon = ICON_MAP[task.icon]

						return (
							<div
								key={task.id}
								className='absolute top-3 bg-violet-400 rounded-xl p-4 flex flex-col gap-5'
								style={{ left: `${startPosition}%`, width: `${widthPercent}%` }}
							>
								<div className='flex gap-3'>
									<div className='relative size-12 bg-gray-300 rounded-full p-3'>
										<Icon className='stroke-accent' />
									</div>
									<div>
										<p>{task.title}</p>
										<span className='text-xs'>
											{formatHours(start)} - {formatHours(end)}
										</span>
									</div>
								</div>
								<div className='*:data-[slot=avatar]:ring-transparent flex -space-x-2 *:data-[slot=avatar]:ring-3 *:data-[slot=avatar]:grayscale'>
									{task.users.map(({ id, name, imagePath }) => (
										<UserAvatar key={id} name={name} src={imagePath} />
									))}
								</div>
							</div>
						)
					})}
				</div>
			</CardContent>
		</Card>
	)
})
