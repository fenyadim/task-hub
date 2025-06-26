import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

export const Header = () => {
	return (
		<header className='flex w-full justify-between items-center mb-3'>
			<h1 className='font-semibold text-2xl'>Dashboard</h1>
			<div className='relative flex items-center bg-input rounded-full dark:bg-input/30 focus-within:ring-accent focus-within:ring-1 px-2'>
				<Search className='h-5 w-5 text-muted-foreground' />
				<Input
					type='text'
					placeholder='Search something...'
					className='border-0 bg-transparent! focus-visible:ring-0 shadow-none'
				/>
			</div>
		</header>
	)
}
