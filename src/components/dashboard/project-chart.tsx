'use client'

import { useState } from 'react'
import { Chart } from './project-chart/chart'
import { SelectInterval } from './project-chart/select-interval'

export const ProjectChart = () => {
	const [interval, setInterval] = useState('monthly')

	return (
		<div className='flex flex-col w-1/2 max-w-[600px] gap-3 bg-sidebar p-5 rounded-2xl'>
			<div className='flex justify-between'>
				<h2 className='font-medium text-2xl'>Projects Statistic</h2>
				<SelectInterval value={interval} onChange={setInterval} />
			</div>
			<Chart interval={interval} />
		</div>
	)
}
