import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { Plus } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { TASK_DATA } from '../../task.data'
import {
	createTaskValidate,
	type CreateTaskFormType,
} from '../constants/create-task.validate'

interface ICreateSubtask {
	taskId: string
}

export const CreateSubtask = ({ taskId }: ICreateSubtask) => {
	const form = useForm({
		resolver: zodResolver(createTaskValidate),
	})

	const onSubmit = (data: CreateTaskFormType) => {
		const task = TASK_DATA.find(task => task.id === taskId)
		if (task) {
			task.subTasks.push({
				id: crypto.randomUUID(),
				title: data.title,
				isCompleted: false,
			})
		}
	}

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
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
						<FormField
							control={form.control}
							name='title'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Title</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<Button className='w-full' type='submit'>
							Create
						</Button>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	)
}
