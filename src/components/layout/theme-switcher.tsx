'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import { useCallback } from 'react'

export function ThemeSwitcher() {
	const { theme, setTheme } = useTheme()

	const toggleTheme = useCallback(() => {
		setTheme(theme === 'light' ? 'dark' : 'light')
	}, [theme])

	return (
		<Button
			className='absolute right-5 bottom-5'
			variant='outline'
			size='icon'
			onClick={toggleTheme}
		>
			<Sun className='h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
			<Moon className='absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
			<span className='sr-only'>Toggle theme</span>
		</Button>
	)
}
