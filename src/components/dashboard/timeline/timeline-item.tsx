import { UserAvatar } from '@/components/ui/user-avatar'
import { BG_COLOR } from '@/constants'
import { cn } from '@/lib/utils'
import type { ITaskWithTime } from '@/types/task'
import { getHours, getMinutes } from 'date-fns'
import { ICON_MAP } from '../task/constants/task-icons.data'
import { formatHours } from './format-hours.utils'

interface ITimelineItem {
	itemIndex: number
	task: ITaskWithTime
}

export const TimelineItem = ({ task, itemIndex }: ITimelineItem) => {
	const start = getHours(task.dueDate.startTime)
	const end = getHours(task.dueDate.endTime)

	const startMin = getMinutes(task.dueDate.startTime)
	const endMin = getMinutes(task.dueDate.endTime)

	const startPosition = (((start - 9) * 60 + startMin) / ((17 - 9) * 60)) * 100
	const endPosition = (((end - 9) * 60 + endMin) / ((17 - 9) * 60)) * 100
	const widthPercent = endPosition - startPosition

	const Icon = ICON_MAP[task.icon]

	return (
		<div
			key={task.id}
			className={cn(
				'absolute top-3 rounded-xl p-4 flex flex-col gap-5',
				BG_COLOR[itemIndex]
			)}
			style={{ left: `${startPosition}%`, width: `${widthPercent}%` }}
		>
			<div className='flex gap-3'>
				<div className='relative size-12 bg-white rounded-full p-3'>
					<Icon className='stroke-accent' />
				</div>
				<div className='text-white'>
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
}
