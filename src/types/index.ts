import type { LucideIcon } from 'lucide-react'

export interface IUser {
	id: string
	name: string
	imagePath?: string
	email: string
}

export interface ISubTask {
	id: string
	title: string
	isCompleted: boolean
}

export interface ITask extends Omit<ISubTask, 'isCompleted'> {
	Icon: LucideIcon
	dueDate: Date
	users: IUser[]
	comments: string[]
	resources: string[]
	links: string[]
	subTasks: ISubTask[]
}

export type FilterTasks = 'all' | 'completed' | 'uncompleted'
export type SortBy = 'asc' | 'desc'
