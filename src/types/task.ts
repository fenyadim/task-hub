import type { IconName } from '@/components/dashboard/task/constants/task-icons.data'
import type { IUser } from './user'

export interface ISubTask {
	id: string
	title: string
	isCompleted: boolean
}

export interface ITask extends Omit<ISubTask, 'isCompleted'> {
	icon: IconName
	dueDate: {
		date: Date
		startTime?: Date
		endTime?: Date
	}
	users: IUser[]
	comments: string[]
	resources: string[]
	links: string[]
	subTasks: ISubTask[]
}

export interface ITaskWithTime extends ITask {
	dueDate: {
		date: Date
		startTime: Date
		endTime: Date
	}
}

export type TTaskFilter = 'all' | 'completed' | 'uncompleted'
export type TTaskSortBy = 'asc' | 'desc'
export type TTaskFormData = Pick<ITask, 'title' | 'dueDate' | 'icon'>
export type TSubTaskFormData = Pick<ISubTask, 'title'>
