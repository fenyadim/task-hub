import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface IAccountAvatar {
	src?: string
}

export const AccountAvatar = ({ src }: IAccountAvatar) => {
	return (
		<Avatar className='size-10'>
			<AvatarImage src={src} />
			<AvatarFallback className='bg-accent' />
		</Avatar>
	)
}
