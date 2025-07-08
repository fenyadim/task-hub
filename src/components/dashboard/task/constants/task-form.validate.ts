import { z } from 'zod'

export const taskFormSchema = z.object({
	name: z.string().min(1, 'Name is required'),
	dueDate: z.date().min(new Date(), 'Due date must be in the future'),
})

export type TaskFormDataType = z.infer<typeof taskFormSchema>
