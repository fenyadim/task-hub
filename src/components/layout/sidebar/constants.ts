import {
	BarChart2,
	Calendar,
	FileText,
	LayoutDashboard,
	MessageCircle,
	Settings,
	Users,
} from 'lucide-react'

export const MENU_ITEMS = [
	{
		label: 'Dashboard',
		Icon: LayoutDashboard,
		href: '/dashboard',
	},
	{
		label: 'Messages',
		Icon: MessageCircle,
		href: '/dashboard/message',
	},
	{
		label: 'Insight',
		Icon: BarChart2,
		href: '/dashboard/insight',
	},
	{
		label: 'Team',
		Icon: Users,
		href: '/dashboard/team',
	},
	{
		label: 'Schedule',
		Icon: Calendar,
		href: '/dashboard/schedule',
	},
	{
		label: 'Report',
		Icon: FileText,
		href: '/dashboard/report',
	},
	{
		label: 'Settings',
		Icon: Settings,
		href: '/dashboard/settings',
	},
]

export const PROJECT_ITEMS = [
	{
		label: 'Landing Page',
		href: '/dashboard/landing-page',
		color: 'bg-violet-500',
	},
	{
		label: 'Mobile App',
		href: '/dashboard/mobile-app',
		color: 'bg-pink-500',
	},
	{
		label: 'Dashboard',
		href: '/dashboard/project-dashboard',
		color: 'bg-amber-500',
	},
	{
		label: 'Fyler',
		href: '/dashboard/fyler',
		color: 'bg-orange-500',
	},
	{
		label: 'Branding',
		href: '/dashboard/branding',
		color: 'bg-green-500',
	},
]
