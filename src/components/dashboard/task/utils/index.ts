import type { ISubTask } from '@/types/task'

export const progressValue = (subTasks: ISubTask[]) => {
	const completedCount = subTasks.filter(
		({ isCompleted }) => isCompleted
	).length
	const totalCount = subTasks.length
	return Math.round((completedCount / totalCount) * 100)
}
