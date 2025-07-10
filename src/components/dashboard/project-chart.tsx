'use client'

import { useState } from 'react'
import { Select } from '../ui/select'
import { Chart } from './chart/chart'
import { INTERVAL_DATA } from './chart/constants'
import type { ChartInterval } from './chart/types'

export const ProjectChart = () => {
	const [interval, setInterval] = useState<ChartInterval>('monthly')

	return (
		<div className='flex flex-col flex-1 gap-3 bg-sidebar p-5 rounded-2xl'>
			<div className='flex justify-between'>
				<h2 className='font-medium text-2xl'>Projects Statistic</h2>
				<Select
					value={interval}
					onChange={setInterval}
					content={INTERVAL_DATA}
				/>
			</div>
			<Chart interval={interval} />
		</div>
	)
}
