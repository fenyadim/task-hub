import { progressValue } from '@/components/dashboard/task/utils'
import type { FilterTasks, ITask, SortBy } from '@/types'
import { useMemo, useState } from 'react'

export const useFilterTasks = (data: ITask[]) => {
	const [filter, setFilter] = useState<FilterTasks>('all')
	const [sortDeadline, setSortDeadline] = useState<SortBy>('asc')

	const tasks = useMemo(() => {
		if (filter === 'completed') {
			return data.filter(({ subTasks }) => progressValue(subTasks) === 100)
		}
		if (filter === 'uncompleted') {
			return data.filter(({ subTasks }) => progressValue(subTasks) !== 100)
		}
		return data
	}, [filter])

	const sortedTasks = useMemo(() => {
		if (sortDeadline === 'asc') {
			return tasks.sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime())
		}
		return tasks.sort((a, b) => b.dueDate.getTime() - a.dueDate.getTime())
	}, [tasks, sortDeadline])

	return {
		filter,
		setFilter,
		sortDeadline,
		setSortDeadline,
		tasks: sortedTasks,
	}
}
