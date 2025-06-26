import type { ChartData, SelectIntervalData } from '../types'

export const CHART_DATA: ChartData[] = [
	{ date: 1640995200000, count: 12 }, // 01.2022
	{ date: 1643673600000, count: 15 }, // 02.2022
	{ date: 1646092800000, count: 14 }, // 03.2022
	{ date: 1648771200000, count: 18 }, // 04.2022
	{ date: 1651363200000, count: 13 }, // 05.2022
	{ date: 1654041600000, count: 17 }, // 06.2022
	{ date: 1656633600000, count: 16 }, // 07.2022
	{ date: 1659312000000, count: 19 }, // 08.2022
	{ date: 1661990400000, count: 15 }, // 09.2022
	{ date: 1664582400000, count: 20 }, // 10.2022
	{ date: 1667260800000, count: 18 }, // 11.2022
	{ date: 1669852800000, count: 21 }, // 12.2022
	{ date: 1672531200000, count: 22 }, // 01.2023
	{ date: 1675209600000, count: 19 }, // 02.2023
	{ date: 1677628800000, count: 23 }, // 03.2023
	{ date: 1680307200000, count: 20 }, // 04.2023
	{ date: 1682899200000, count: 24 }, // 05.2023
	{ date: 1685577600000, count: 21 }, // 06.2023
	{ date: 1688169600000, count: 25 }, // 07.2023
	{ date: 1690848000000, count: 22 }, // 08.2023
	{ date: 1693526400000, count: 27 }, // 09.2023
	{ date: 1696118400000, count: 23 }, // 10.2023
	{ date: 1698796800000, count: 26 }, // 11.2023
	{ date: 1701388800000, count: 14 }, // 12.2023
	{ date: 1704067200000, count: 18 }, // 01.2024
	{ date: 1706745600000, count: 25 }, // 02.2024
	{ date: 1709251200000, count: 29 }, // 03.2024
	{ date: 1711929600000, count: 27 }, // 04.2024
	{ date: 1714521600000, count: 20 }, // 05.2024
	{ date: 1717200000000, count: 28 }, // 06.2024
]

export const INTERVAL_DATA: SelectIntervalData[] = [
	{
		value: 'yearly',
		label: 'Yearly',
	},
	{
		value: 'monthly',
		label: 'Monthly',
	},
]
