import { ThemeSwitcher } from '@/components/layout/theme-switcher'
import { Toaster } from '@/components/ui/sonner'
import { ThemeProvider } from 'next-themes'
import type { PropsWithChildren } from 'react'

export const RootProvider = ({ children }: PropsWithChildren) => {
	return (
		<ThemeProvider
			attribute='class'
			defaultTheme='dark'
			enableSystem
			disableTransitionOnChange
		>
			{children}
			<Toaster />
			<ThemeSwitcher />
		</ThemeProvider>
	)
}
