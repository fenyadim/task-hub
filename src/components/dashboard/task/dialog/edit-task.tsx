import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
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
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { CalendarIcon, Edit } from 'lucide-react'
import { useForm } from 'react-hook-form'
import {
	taskFormSchema,
	type TaskFormDataType,
} from '../constants/task-form.validate'
import { ICON_MAP, ICON_NAMES } from '../constants/task-icons.data'

interface IEditTask {
	initialValues?: TaskFormDataType
}

export const EditTask = ({ initialValues }: IEditTask) => {
	const form = useForm({
		resolver: zodResolver(taskFormSchema),
		defaultValues: initialValues,
	})

	const onSubmit = (data: TaskFormDataType) => console.log(data)

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className='rounded-full' variant='outline' size='icon'>
					<Edit />
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Edit task</DialogTitle>
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

						<FormField
							control={form.control}
							name='dueDate'
							render={({ field }) => (
								<FormItem className='flex flex-col'>
									<FormLabel>Due date</FormLabel>
									<Popover>
										<PopoverTrigger asChild>
											<FormControl>
												<Button
													variant='outline'
													className={cn(
														'w-[240px] pl-3 bg-input text-left font-normal',
														!field.value && 'text-muted-foreground'
													)}
												>
													{field.value ? (
														format(field.value, 'PPP')
													) : (
														<span>Pick a date</span>
													)}
													<CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
												</Button>
											</FormControl>
										</PopoverTrigger>
										<PopoverContent className='w-auto p-0' align='start'>
											<Calendar
												mode='single'
												selected={field.value}
												onSelect={field.onChange}
												disabled={date =>
													date < new Date() || date < new Date('1900-01-01')
												}
												captionLayout='dropdown'
											/>
										</PopoverContent>
									</Popover>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='icon'
							render={({ field }) => (
								<FormItem className='flex flex-col'>
									<FormLabel>Icon</FormLabel>
									<FormControl>
										<div className='flex gap-2'>
											{ICON_NAMES.map(name => {
												const Icon = ICON_MAP[name]
												return (
													<Button
														key={name}
														type='button'
														size='icon'
														onClick={() => field.onChange(name)}
														variant={
															field.value === name ? 'default' : 'outline'
														}
													>
														<Icon />
													</Button>
												)
											})}
										</div>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<Button type='submit'>Save</Button>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	)
}
