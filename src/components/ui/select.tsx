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
	value: T
	onChange: (value: T) => void
	content: Content[]
	className?: string
}

export const Select = <T extends string>({
	value,
	content,
	onChange,
	className,
}: ISelect<T>) => {
	return (
		<SelectUI value={value} onValueChange={onChange}>
			<SelectTrigger className={className}>
				<SelectValue placeholder={value} />
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
