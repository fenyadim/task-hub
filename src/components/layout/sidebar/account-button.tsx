import { Button } from '@/components/ui/button'
import { UserAvatar } from '@/components/ui/user-avatar'
import { ChevronDown } from 'lucide-react'

const ACCOUNT_NAME = 'Awe Std'

export const AccountButton = () => {
	return (
		<Button className='bg-accent/10 rounded-full flex justify-between items-center text-foreground h-min w-full p-1 pl-1! hover:bg-accent/20'>
			<div className='flex items-center gap-2'>
				<UserAvatar className='size-10' name={ACCOUNT_NAME} />
				<div className='flex flex-col items-baseline'>
					<h3 className='text-sm'>{ACCOUNT_NAME}</h3>
					<p className='text-[10px] font-light'>awestd@gmail.com</p>
				</div>
			</div>
			<ChevronDown />
		</Button>
	)
}
