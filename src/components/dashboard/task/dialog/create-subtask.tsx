'use client'

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
import { taskStore } from '@/stores/task.store'
import { zodResolver } from '@hookform/resolvers/zod'
import { Plus } from 'lucide-react'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import {
	createTaskValidate,
	type CreateTaskFormType,
} from '../constants/create-task.validate'

interface ICreateSubtask {
	taskId: string
}

export const CreateSubtask = observer(({ taskId }: ICreateSubtask) => {
	const [isOpenDialog, setIsOpenDialog] = useState(false)

	const form = useForm({
		resolver: zodResolver(createTaskValidate),
		defaultValues: { title: '' },
	})

	const onSubmit = (data: CreateTaskFormType) => {
		taskStore.addSubTask(taskId, data)
		toast.success('Subtask created successfully')
		setIsOpenDialog(false)
	}

	return (
		<Dialog open={isOpenDialog} onOpenChange={setIsOpenDialog}>
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
})
