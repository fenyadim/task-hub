'use client'

import { useMemo, useState } from 'react'
import { Select } from '../ui/select'
import { FILTER_DATA, SORT_DATA, TASK_DATA } from './task/constants'
import { TaskCard } from './task/task-card'
import { progressValue } from './task/utils'

export const LastTasks = () => {
	const [filter, setFilter] = useState('all')
	const [sortDeadline, setSortDeadline] = useState('asc')

	const tasks = useMemo(() => {
		if (filter === 'completed') {
			return TASK_DATA.filter(({ subTasks }) => progressValue(subTasks) === 100)
		}
		if (filter === 'uncompleted') {
			return TASK_DATA.filter(({ subTasks }) => progressValue(subTasks) !== 100)
		}
		return TASK_DATA
	}, [filter])

	const sortedTasks = useMemo(() => {
		if (sortDeadline === 'asc') {
			return tasks.sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime())
		}
		return tasks.sort((a, b) => b.dueDate.getTime() - a.dueDate.getTime())
	}, [tasks, sortDeadline])

	return (
		<div>
			<div className='flex justify-between'>
				<h2 className='font-medium text-xl mb-4'>
					Last Tasks{' '}
					<span className='opacity-40 font-normal'>({sortedTasks.length})</span>
				</h2>
				<div className='flex gap-2'>
					<Select
						className='bg-sidebar'
						initialValue={filter}
						onChange={setFilter}
						content={FILTER_DATA}
					/>
					<Select
						className='bg-sidebar'
						initialValue={sortDeadline}
						onChange={setSortDeadline}
						content={SORT_DATA}
					/>
				</div>
			</div>
			{sortedTasks.length ? (
				<div className='grid grid-cols-3 gap-5'>
					{sortedTasks.map(item => (
						<TaskCard key={item.id} {...item} />
					))}
				</div>
			) : (
				<div>
					<p className='text-center opacity-50'>No tasks available</p>
				</div>
			)}
		</div>
	)
}
