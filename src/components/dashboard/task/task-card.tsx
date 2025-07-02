import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { UserAvatar } from '@/components/ui/user-avatar'
import {
	Edit,
	Image as ImageSvg,
	Link,
	MessageSquareMore,
	Plus,
} from 'lucide-react'
import { useMemo } from 'react'
import type { ITask } from './types'
import { progressValue } from './utils'

export const TaskCard = ({
	Icon,
	title,
	dueDate,
	users,
	subTasks,
	resources,
	links,
	comments,
}: ITask) => {
	const progress = useMemo(() => progressValue(subTasks), [subTasks])

	return (
		<div className='grid grid-rows-[2fr_auto_auto] gap-4 bg-sidebar rounded-xl p-5'>
			<div className='flex items-center justify-between gap-2'>
				<div className='flex items-center gap-2'>
					<div className='relative size-12 bg-accent/20 rounded-full p-3'>
						<Icon className='stroke-accent' />
					</div>
					<div>
						<h3 className='font-medium'>{title}</h3>
						<p className='text-sm opacity-50'>Due: {dueDate.getDay()} days</p>
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
					<Button className='rounded-full' size='icon'>
						<Plus />
					</Button>
					<Button className='rounded-full' variant='outline' size='icon'>
						<Edit />
					</Button>
				</div>
			</div>
		</div>
	)
}
