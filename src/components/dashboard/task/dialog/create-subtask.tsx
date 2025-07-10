import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import type { ISubTask } from '@/types/task'
import { Plus } from 'lucide-react'
import { SubtaskItem } from './subtask-item'

interface ICreateSubtask {
	subtaskList: ISubTask[]
}

export const CreateSubtask = ({ subtaskList }: ICreateSubtask) => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className='rounded-full' size='icon'>
					<Plus />
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Create subtask</DialogTitle>
				</DialogHeader>
				<div className='flex flex-col gap-2'>
					{subtaskList.map(item => (
						<SubtaskItem key={item.id} {...item} />
					))}
				</div>
			</DialogContent>
		</Dialog>
	)
}
