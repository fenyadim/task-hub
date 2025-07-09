import { z } from 'zod'
import { ICON_NAMES } from './task-icons.data'

export const taskFormSchema = z.object({
	title: z.string().min(1, 'Title is required'),
	dueDate: z.date().min(new Date(), 'Due date must be in the future'),
	icon: z.enum(ICON_NAMES, {
		errorMap: () => ({
			message: 'Invalid icon selected',
		}),
	}),
})

export type TaskFormDataType = z.infer<typeof taskFormSchema>
