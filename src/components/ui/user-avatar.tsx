import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatarUI'
import { getInitials } from '@/utils/getInitials'

import { useMemo } from 'react'

interface IUserAvatar {
	src?: string
	name: string
	className?: string
}

export const UserAvatar = ({ src, name, className }: IUserAvatar) => {
	const initialName = useMemo(() => getInitials(name), [name])

	return (
		<Avatar className={className}>
			<AvatarImage src={src} alt={name} className='object-cover' />
			<AvatarFallback className='bg-accent text-white'>
				{initialName}
			</AvatarFallback>
		</Avatar>
	)
}
