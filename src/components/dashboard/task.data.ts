import type { ITask } from '@/types/task'
import { setHours, setMinutes } from 'date-fns'
import type { IFilterData, ISortData } from './task/types'
import { USERS } from './user.data'

export const TASK_DATA: ITask[] = [
	{
		id: 'task-1',
		title: 'Design project structure',
		icon: 'Calendar',
		dueDate: {
			date: new Date(),
			startTime: setMinutes(setHours(new Date(), 10), 0),
			endTime: setMinutes(setHours(new Date(), 13), 30),
		},
		users: [USERS[0], USERS[1], USERS[2]],
		comments: ['Initial structure created', 'Need review'],
		resources: ['structure.pdf', 'requirements.docx'],
		links: ['https://github.com/example/project-structure'],
		subTasks: [
			{ id: 'sub-1', title: 'Create folders', isCompleted: true },
			{ id: 'sub-2', title: 'Setup linters', isCompleted: false },
		],
	},
	{
		id: 'task-2',
		title: 'Implement authentication',
		icon: 'User',
		dueDate: {
			date: new Date(),
			startTime: setMinutes(setHours(new Date(), 13), 0),
			endTime: setMinutes(setHours(new Date(), 15), 30),
		},
		users: [USERS[2], USERS[3]],
		comments: ['OAuth2 integration started'],
		resources: ['auth-flow.png'],
		links: ['https://auth0.com/docs/flows'],
		subTasks: [
			{ id: 'sub-3', title: 'Setup OAuth', isCompleted: true },
			{ id: 'sub-4', title: 'Add login page', isCompleted: true },
		],
	},
	{
		id: 'task-3',
		title: 'Upload project files',
		icon: 'File',
		dueDate: {
			date: new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000),
		},
		users: [USERS[4]],
		comments: [],
		resources: ['project.zip'],
		links: [],
		subTasks: [
			{ id: 'sub-5', title: 'Compress files', isCompleted: false },
			{ id: 'sub-6', title: 'Upload to server', isCompleted: false },
		],
	},
	{
		id: 'task-4',
		title: 'Upload project files',
		icon: 'BookOpen',
		dueDate: {
			date: new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000),
		},
		users: [USERS[4]],
		comments: [],
		resources: ['project.zip'],
		links: [],
		subTasks: [
			{ id: 'sub-7', title: 'Compress files', isCompleted: false },
			{ id: 'sub-8', title: 'Upload to server', isCompleted: false },
			{ id: 'sub-9', title: 'Upload to server', isCompleted: true },
		],
	},
]

export const FILTER_DATA: IFilterData[] = [
	{ label: 'All', value: 'all' },
	{ label: 'Completed', value: 'completed' },
	{ label: 'Uncompleted', value: 'uncompleted' },
]

export const SORT_DATA: ISortData[] = [
	{ label: 'Ascending', value: 'asc' },
	{ label: 'Descending', value: 'desc' },
]
