import { z } from 'zod'

export const createTaskValidate = z.object({
	title: z.string().min(1, 'Title for subtask is required'),
})

export type CreateTaskFormType = z.infer<typeof createTaskValidate>
