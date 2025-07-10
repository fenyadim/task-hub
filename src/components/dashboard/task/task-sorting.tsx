import { Select } from '@/components/ui/select'
import { taskStore } from '@/stores/task.store'
import type { TTaskSortBy } from '@/types/task'
import { observer } from 'mobx-react-lite'
import { SORT_DATA } from '../task.data'

export const TaskSorting = observer(() => {
	const handleChange = (value: TTaskSortBy) => {
		taskStore.setSortByDueDate(value)
	}

	return (
		<Select
			className='bg-sidebar'
			value={taskStore.sortByDueDate}
			onChange={handleChange}
			content={SORT_DATA}
		/>
	)
})
