import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { INTERVAL_DATA } from './constants'

interface ISelectInterval {
	value: string
	onChange: (value: string) => void
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
