import { Select } from '@/components/ui/select'
import { taskStore } from '@/stores/task.store'
import type { TTaskFilter } from '@/types/task'
import { observer } from 'mobx-react-lite'
import { FILTER_DATA } from '../task.data'

export const TaskFilter = observer(() => {
	const handleChange = (value: TTaskFilter) => {
		taskStore.setFilter(value)
	}

	return (
		<Select
			className='bg-sidebar'
			value={taskStore.filter}
			onChange={handleChange}
			content={FILTER_DATA}
		/>
	)
})
