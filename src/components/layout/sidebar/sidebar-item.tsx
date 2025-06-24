import Link from 'next/link'
import type { ReactNode } from 'react'

interface ISidebarItem {
	href: string
	label: string
	icon: ReactNode
}

export const SidebarItem = ({ href, icon, label }: ISidebarItem) => {
	return (
		<li className='hover:bg-accent/10 rounded-full transition'>
			<Link
				className='flex items-center text-sm text-gray-600 dark:text-gray-200 font-normal gap-2 px-4 py-2'
				href={href}
			>
				{icon}
				{label}
			</Link>
		</li>
	)
}
