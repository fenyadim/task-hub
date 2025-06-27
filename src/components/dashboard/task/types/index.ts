import type { IUser } from '@/types'
import type { LucideIcon } from 'lucide-react'

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
