interface ITooltipProps {
	active?: boolean
	payload?: { value: number }[]
	label?: string
}

export const CustomTooltip = ({ active, payload }: ITooltipProps) => {
	if (active && payload && payload.length) {
		return (
			<div
				className='-translate-x-1/2'
				style={{
					background: 'var(--accent)',
					color: '#fff',
					padding: '4px 12px',
					borderRadius: 16,
					fontSize: 14,
					fontWeight: 500,
					pointerEvents: 'none',
				}}
			>
				{payload[0].value} Projects
			</div>
		)
	}
	return null
}
