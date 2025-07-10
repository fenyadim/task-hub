import type { TTaskFilter, TTaskSortBy } from '@/types/task'

export interface IFilterData {
	value: TTaskFilter
	label: string
}

export interface ISortData {
	value: TTaskSortBy
	label: string
}
