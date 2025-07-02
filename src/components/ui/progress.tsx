'use client'

import { CircleCheck } from 'lucide-react'
import { useMemo } from 'react'
import { Progress as ProgressUI } from './progressUI'

interface IProgress {
	value: number
}

export const Progress = ({ value }: IProgress) => {
	const content = useMemo(() => {
		if (value === 100) {
			return (
				<>
					<CircleCheck />
					Done
				</>
			)
		}
		return `${value}%`
	}, [value])

	const colorProgressBar = useMemo(() => {
		if (value === 100) return 'bg-emerald-500'
		if (value >= 75) return 'bg-amber-400'
		if (value >= 50) return 'bg-primary'
		if (value >= 25) return 'bg-rose-400'
		return 'bg-neutral-300'
	}, [value])

	return (
		<ProgressUI
			value={value}
			contentElement={content}
			color={colorProgressBar}
		/>
	)
}
