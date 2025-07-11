'use client'

import { taskStore } from '@/stores/task.store'
import { observer } from 'mobx-react-lite'
import { TaskCard } from './task/task-card'
import { TaskFilter } from './task/task-filter'
import { TaskSorting } from './task/task-sorting'

export const LastTasks = observer(() => {
	const filteredTasks = taskStore.filteredTasks

	return (
		<div>
			<div className='flex justify-between'>
				<h2 className='font-medium text-xl mb-4'>
					Last Tasks{' '}
					<span className='opacity-40 font-normal'>
						({filteredTasks.length})
					</span>
				</h2>
				<div className='flex gap-2'>
					<TaskFilter />
					<TaskSorting />
				</div>
			</div>
			{filteredTasks.length ? (
				<div className='grid grid-cols-[var(--auto-fill)] gap-5'>
					{filteredTasks.map(item => (
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
})
