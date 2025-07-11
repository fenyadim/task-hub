import { z } from 'zod'

export const loginFormSchema = z.object({
	email: z.string().min(1, 'Email is required').email('Invalid email'),
	password: z.string().min(6, 'Password must be at least 6 characters'),
})

export type TLoginForm = z.infer<typeof loginFormSchema>

export const registerFormSchema = z
	.object({
		email: z.string().min(1, 'Email is required').email('Invalid email'),
		password: z.string().min(6, 'Password must be at least 6 characters'),
		confirmPassword: z.string(),
	})
	.refine(({ password, confirmPassword }) => password === confirmPassword, {
		message: 'Passwords do not match',
		path: ['confirmPassword'],
	})

export type TRegisterForm = z.infer<typeof registerFormSchema>
