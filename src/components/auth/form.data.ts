import type { TFormType } from './form.types'

export const MESSAGE_TOAST: Record<TFormType, string> = {
	login: 'Login successful',
	register: 'Registration successful',
	'forgot-password': 'Password reset successful',
	'reset-password': 'Password reset successful',
}
