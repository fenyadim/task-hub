'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { createSession } from '@/lib/session'
import { zodResolver } from '@hookform/resolvers/zod'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { MESSAGE_TOAST } from './form.data'
import type { TFormType } from './form.types'
import { loginFormSchema, type TLoginForm } from './form.validate'

interface IAuthForm {
	type: TFormType
}

export const AuthForm = ({ type }: IAuthForm) => {
	const form = useForm({
		resolver: zodResolver(loginFormSchema),
		defaultValues: { email: '', password: '' },
	})

	const router = useRouter()

	const [showPassword, setShowPassword] = useState(false)

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword)
	}

	async function onSubmit(data: TLoginForm) {
		toast.success(MESSAGE_TOAST[type], {
			id: type,
		})
		form.reset()

		const mockId = crypto.randomUUID()
		await createSession(mockId)
		router.replace('/dashboard')
	}

	return (
		<div className='flex justify-center items-center h-full'>
			<Card className='w-xs'>
				<CardHeader>
					<CardTitle className='text-2xl text-center'>
						{type === 'login' ? 'Login' : 'Register'}
					</CardTitle>
				</CardHeader>
				<CardContent>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className='flex flex-col gap-5'
						>
							<FormField
								control={form.control}
								name='email'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input
												type='email'
												placeholder='admin@admin.com'
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='password'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Password</FormLabel>
										<div className='relative flex items-center border border-input rounded-md'>
											<FormControl>
												<Input
													type={showPassword ? 'text' : 'password'}
													placeholder='Password'
													className='rounded-r-none border-none'
													{...field}
												/>
											</FormControl>
											<Button
												className='rounded-l-none dark:bg-input/30 bg-transparent text-muted-foreground hover:bg-transparent'
												type='button'
												size='icon'
												onClick={togglePasswordVisibility}
											>
												{showPassword ? (
													<EyeOffIcon className='h-5 w-5' />
												) : (
													<EyeIcon className='h-5 w-5' />
												)}
											</Button>
										</div>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button type='submit' className='bg-primary text-white'>
								{type === 'login' ? 'Login' : 'Register'}
							</Button>
						</form>
					</Form>
				</CardContent>
			</Card>
		</div>
	)
}
