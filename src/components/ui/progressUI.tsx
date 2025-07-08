'use client'

import * as ProgressPrimitive from '@radix-ui/react-progress'
import * as React from 'react'

import { cn } from '@/lib/utils'

interface ProgressProps
	extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
	contentElement: React.ReactNode
	color: string
	value: number
}

function Progress({
	className,
	value,
	contentElement,
	color,
	...props
}: ProgressProps) {
	return (
		<ProgressPrimitive.Root
			data-slot='progress'
			className={cn(
				'bg-primary/20 relative h-10 w-full overflow-hidden rounded-full',
				className
			)}
			{...props}
		>
			<ProgressPrimitive.Indicator
				data-slot='progress-indicator'
				className={cn('h-full w-full flex-1 transition-all', color)}
				style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
			/>
			<div
				className={cn(
					'absolute top-0 left-0 h-10 pointer-events-none  bg-[length:28px_28px]',
					{
						'animate-progress': value < 100,
					}
				)}
				style={{
					width: `${value}%`,
					backgroundImage:
						'repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 10px, transparent 10px, transparent 20px)',
				}}
			/>
			<p className='absolute flex items-center gap-2 cursor-default top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-medium text-white'>
				{contentElement}
			</p>
		</ProgressPrimitive.Root>
	)
}

export { Progress }
