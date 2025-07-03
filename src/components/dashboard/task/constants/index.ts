import { Calendar, File, User } from 'lucide-react'
import { USERS } from '../../user.data'
import type { IFilterData, ISortData, ITask } from '../types'

export const TASK_DATA: ITask[] = [
	{
		id: 'task-1',
		title: 'Design project structure',
		Icon: Calendar,
		dueDate: new Date('2024-07-01'),
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
		Icon: User,
		dueDate: new Date('2024-07-05'),
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
		Icon: File,
		dueDate: new Date('2024-07-10'),
		users: [USERS[4]],
		comments: [],
		resources: ['project.zip'],
		links: [],
		subTasks: [
			{ id: 'sub-5', title: 'Compress files', isCompleted: false },
			{ id: 'sub-6', title: 'Upload to server', isCompleted: false },
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
