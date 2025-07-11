import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { taskStore } from '@/stores/task.store'
import { observer } from 'mobx-react-lite'
import { SubtaskItem } from './subtask-item'

interface IViewSubtask {
	taskId: string
}

export const ViewSubtask = observer(({ taskId }: IViewSubtask) => {
	const task = taskStore.getTaskById(taskId)
	if (!task) return null
	const subtaskList = task.subTasks

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className='absolute z-0 pt-10 pb-5 bottom-0 right-0 left-0 rounded-b-2xl rounded-t-none group-hover:-bottom-10'>
					View subtask
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>View subtask</DialogTitle>
				</DialogHeader>
				<div className='flex flex-col gap-2'>
					{subtaskList.map(item => (
						<SubtaskItem key={item.id} {...item} />
					))}
				</div>
			</DialogContent>
		</Dialog>
	)
})
