import type { FilterTasks, SortBy } from '@/types/task'

export interface IFilterData {
	value: FilterTasks
	label: string
}

export interface ISortData {
	value: SortBy
	label: string
}
