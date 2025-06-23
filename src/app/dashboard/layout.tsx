import { Sidebar } from '@/components/layout'
import type { PropsWithChildren } from 'react'

export default function DashboardLayout({ children }: PropsWithChildren) {
	return (
		<div>
			<Sidebar />
			<main>{children}</main>
		</div>
	)
}
