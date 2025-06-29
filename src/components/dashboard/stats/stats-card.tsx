import Image from 'next/image'

export interface IStatsCard {
	label: string
	value: string | number
	bgColor: string
	srcImage: string
}

export const StatsCard = ({ label, value, bgColor, srcImage }: IStatsCard) => {
	return (
		<div
			className={`${bgColor} rounded-xl p-3 py-5 flex flex-1 gap-5 justify-between items-center dark:text-black`}
		>
			<div>
				<h2 className='text-3xl font-medium'>{value}</h2>
				<p className='text-xs'>{label}</p>
			</div>
			<Image src={srcImage} alt={label} width={65} height={65} />
		</div>
	)
}
