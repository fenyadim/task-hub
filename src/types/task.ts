import type { LucideIcon } from 'lucide-react'
import type { IUser } from './user'

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

export type TTaskFilter = 'all' | 'completed' | 'uncompleted'
export type TTaskSortBy = 'asc' | 'desc'
export type TTaskFormData = Pick<ITask, 'title' | 'dueDate' | 'Icon'>
export type TSubTaskFormData = Pick<ISubTask, 'title'>
