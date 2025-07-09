import {
	Activity,
	BookOpen,
	Briefcase,
	Calendar,
	File,
	Hammer,
	Plane,
	User,
	type LucideIcon,
} from 'lucide-react'

export const ICON_NAMES = [
	'Plane',
	'Calendar',
	'User',
	'Activity',
	'Hammer',
	'File',
	'BookOpen',
	'Briefcase',
] as const

export type IconName = (typeof ICON_NAMES)[number]

export const ICON_MAP: Record<IconName, LucideIcon> = {
	Plane,
	Calendar,
	User,
	Activity,
	Hammer,
	File,
	BookOpen,
	Briefcase,
}
