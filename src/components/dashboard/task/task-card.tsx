import { Progress } from '@/components/ui/progress'
import { UserAvatar } from '@/components/ui/user-avatar'
import type { ITask } from '@/types/task'
import { Image as ImageSvg, Link, MessageSquareMore } from 'lucide-react'
import { observer } from 'mobx-react-lite'
import { useMemo } from 'react'
import { ICON_MAP } from './constants/task-icons.data'
import { CreateSubtask } from './dialog/create-subtask'
import { EditTask } from './dialog/edit-task'
import { ViewSubtask } from './dialog/view-subtask'
import { progressValue } from './utils'

export const TaskCard = observer(
	({
		id,
		icon,
		title,
		dueDate,
		users,
		subTasks,
		resources,
		links,
		comments,
	}: ITask) => {
		const progress = useMemo(() => progressValue(subTasks), [subTasks])
		const dueDateLeft = useMemo(
			() => Math.ceil((dueDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24)),
			[dueDate]
		)
		const Icon = useMemo(() => ICON_MAP[icon], [icon])

		return (
			<div className='relative group hover:z-20 hover:shadow-lg'>
				<div className='relative grid z-10 grid-rows-[2fr_auto_auto] h-55 gap-4 bg-sidebar rounded-xl p-5 '>
					<div className='flex items-center justify-between gap-2'>
						<div className='flex items-center gap-2'>
							<div className='relative size-12 bg-accent/20 rounded-full p-3'>
								<Icon className='stroke-accent' />
							</div>
							<div>
								<h3 className='font-medium'>{title}</h3>
								<p className='text-sm opacity-50'>Due: {dueDateLeft} days</p>
							</div>
						</div>
						<div className='*:data-[slot=avatar]:ring-sidebar flex -space-x-2 *:data-[slot=avatar]:ring-3 *:data-[slot=avatar]:grayscale'>
							{users.map(({ id, name, imagePath }) => (
								<UserAvatar key={id} name={name} src={imagePath} />
							))}
						</div>
					</div>
					<Progress value={progress} />
					<div className='flex justify-between items-center'>
						<div className='flex gap-2 *:flex *:gap-1 *:items-center **:stroke-gray-400'>
							<p>
								<MessageSquareMore size={20} />
								{comments.length}
							</p>
							<p>
								<ImageSvg size={20} />
								{resources.length}
							</p>
							<p>
								<Link size={20} />
								{links.length}
							</p>
						</div>
						<div className='flex gap-2'>
							<CreateSubtask taskId={id} />
							<EditTask
								taskData={{
									id,
									title,
									dueDate,
									icon,
								}}
							/>
						</div>
					</div>
				</div>
				<ViewSubtask taskId={id} />
			</div>
		)
	}
)
