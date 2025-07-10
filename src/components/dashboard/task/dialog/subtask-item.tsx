import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import type { ISubTask } from '@/types/task'
import { Trash } from 'lucide-react'

export const SubtaskItem = ({ id, title, isCompleted }: ISubTask) => {
	return (
		<div className='flex items-center gap-3'>
			<Checkbox id={id} defaultChecked={isCompleted} />
			<Input id={id} defaultValue={title} />
			<Button variant='destructive'>
				<Trash />
			</Button>
		</div>
	)
}
