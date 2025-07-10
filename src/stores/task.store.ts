import { TASK_DATA } from '@/components/dashboard/task.data'
import type {
	ITask,
	TSubTaskFormData,
	TTaskFilter,
	TTaskFormData,
	TTaskSortBy,
} from '@/types/task'
import { makeAutoObservable } from 'mobx'

class TaskStore {
	tasks: ITask[] = TASK_DATA
	filter: TTaskFilter = 'all'
	sortByDueDate: TTaskSortBy = 'asc'

	constructor() {
		makeAutoObservable(this)
	}

	getTaskById(id: string): ITask | undefined {
		return this.tasks.find(task => task.id === id)
	}

	addTask(task: ITask): void {
		this.tasks.push(task)
	}

	updateTask(id: string, updateTask: Partial<TTaskFormData>): void {
		const taskIndex = this.tasks.findIndex(task => task.id === id)
		if (taskIndex === -1) return

		this.tasks[taskIndex] = { ...this.tasks[taskIndex], ...updateTask }
	}

	addSubTask(taskId: string, subtask: TSubTaskFormData): void {
		const task = this.getTaskById(taskId)
		if (!task) return

		task.subTasks.push({
			id: crypto.randomUUID(),
			title: subtask.title,
			isCompleted: false,
		})
	}

	setFilter(filter: TTaskFilter): void {
		this.filter = filter
		console.log(this.filter)
	}

	setSortByDueDate(sortByDueDate: TTaskSortBy): void {
		this.sortByDueDate = sortByDueDate
		console.log(this.sortByDueDate)
	}

	get filteredTasks(): ITask[] {
		let filtered = this.tasks

		filtered = filtered.filter(task => {
			switch (this.filter) {
				case 'all':
					return task
				case 'completed':
					return task.subTasks.every(subTask => subTask.isCompleted)
				case 'uncompleted':
					return task.subTasks.some(subTask => !subTask.isCompleted)
			}
		})

		return filtered.slice().sort((a, b) => {
			const dateA = new Date(a.dueDate).getTime()
			const dateB = new Date(b.dueDate).getTime()

			if (this.sortByDueDate === 'asc') {
				return dateA - dateB
			}
			return dateB - dateA
		})
	}
}

export const taskStore = new TaskStore()
