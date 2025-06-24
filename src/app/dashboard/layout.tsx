import { Header, Sidebar } from '@/components/layout'
import type { PropsWithChildren } from 'react'

export default function DashboardLayout({ children }: PropsWithChildren) {
	return (
		<div className='flex h-full'>
			<Sidebar />
			<main className='p-5 flex-1'>
				<Header />
				{children}
			</main>
		</div>
	)
}
