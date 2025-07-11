import { AuthForm } from '@/components/auth/auth-form'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Login',
	...NO_INDEX_PAGE,
}

export default function LoginRoute() {
	return <AuthForm type='login' />
}
