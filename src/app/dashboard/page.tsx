import { DashboardPage } from '@/screens/dashboard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Dashboard',
}

export default function DashboardRoute() {
	return <DashboardPage />
}
