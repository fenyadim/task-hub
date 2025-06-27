import { TASK_DATA } from './task/constants'
import { TaskCard } from './task/task-card'

export const LastTasks = () => {
	return (
		<div>
			<h2 className='font-medium text-xl mb-4'>
				Last Tasks{' '}
				<span className='opacity-40 font-normal'>({TASK_DATA.length})</span>
			</h2>
			{TASK_DATA.length ? (
				<div className='flex gap-5'>
					{TASK_DATA.map(item => (
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
