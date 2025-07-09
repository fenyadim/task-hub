'use client'

import { useFilterTasks } from '@/hooks/useFilterTasks'
import { Select } from '../ui/select'
import { FILTER_DATA, SORT_DATA, TASK_DATA } from './task.data'
import { TaskCard } from './task/task-card'

export const LastTasks = () => {
	const { filter, setFilter, sortDeadline, setSortDeadline, tasks } =
		useFilterTasks(TASK_DATA)

	return (
		<div>
			<div className='flex justify-between'>
				<h2 className='font-medium text-xl mb-4'>
					Last Tasks{' '}
					<span className='opacity-40 font-normal'>({tasks.length})</span>
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
			{tasks.length ? (
				<div className='grid grid-cols-3 gap-5'>
					{tasks.map(item => (
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
