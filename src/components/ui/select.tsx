import {
	SelectContent,
	SelectItem,
	SelectTrigger,
	Select as SelectUI,
	SelectValue,
} from '@/components/ui/selectUI'

type Content = {
	value: string
	label: string
}

interface ISelect<T> {
	initialValue: T
	onChange: (value: T) => void
	content: Content[]
	className?: string
}

export const Select = <T extends string>({
	initialValue,
	content,
	onChange,
	className,
}: ISelect<T>) => {
	return (
		<SelectUI value={initialValue} onValueChange={onChange}>
			<SelectTrigger className={className}>
				<SelectValue placeholder='Interval' />
			</SelectTrigger>
			<SelectContent>
				{content.map(({ value, label }) => (
					<SelectItem key={value} value={value}>
						{label}
					</SelectItem>
				))}
			</SelectContent>
		</SelectUI>
	)
}
