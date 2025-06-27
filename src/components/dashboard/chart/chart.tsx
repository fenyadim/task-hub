'use client'

import { formatMonth, formatYear } from '@/utils/formatDate'
import { useMemo } from 'react'
import {
	Area,
	AreaChart,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts'
import { CHART_DATA } from './constants'
import { CustomTooltip } from './tooltip'
import type { ChartInterval } from './types'
import { getDataFromInterval } from './utils/getDataFromInterval'

interface IChart {
	interval: ChartInterval
}

export const Chart = ({ interval }: IChart) => {
	const data = useMemo(
		() => getDataFromInterval(interval, CHART_DATA),
		[interval]
	)

	return (
		<ResponsiveContainer width='100%'>
			<AreaChart data={data} margin={{ top: 12, right: 0, left: 0, bottom: 0 }}>
				<Area
					type='monotone'
					dataKey='count'
					stroke='var(--accent)'
					fill='url(#colorUv)'
					strokeWidth={2}
					dot={false}
				/>
				<defs>
					<linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
						<stop offset='5%' stopColor='var(--accent)' stopOpacity={0.5} />
						<stop offset='100%' stopColor='var(--accent)' stopOpacity={0.05} />
					</linearGradient>
				</defs>
				<CartesianGrid vertical={false} strokeDasharray='3 3' />
				<XAxis
					dataKey='date'
					axisLine={false}
					tickLine={false}
					fontSize={14}
					dy={10}
					tickFormatter={interval === 'monthly' ? formatMonth : formatYear}
				/>
				<YAxis axisLine={false} tickLine={false} fontSize={14} dx={-30} />
				<Tooltip
					content={<CustomTooltip />}
					cursor={{ stroke: 'var(--accent)', strokeDasharray: '4 4' }}
					isAnimationActive={false}
				/>
			</AreaChart>
		</ResponsiveContainer>
	)
}
