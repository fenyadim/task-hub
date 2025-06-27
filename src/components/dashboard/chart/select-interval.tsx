import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { INTERVAL_DATA } from './constants'
import type { ChartInterval } from './types'

interface ISelectInterval {
	value: ChartInterval
	onChange: (value: ChartInterval) => void
}

export const SelectInterval = ({ value, onChange }: ISelectInterval) => {
	return (
		<Select value={value} onValueChange={onChange}>
			<SelectTrigger>
				<SelectValue placeholder='Interval' />
			</SelectTrigger>
			<SelectContent>
				{INTERVAL_DATA.map(({ value, label }) => (
					<SelectItem key={value} value={value}>
						{label}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	)
}
