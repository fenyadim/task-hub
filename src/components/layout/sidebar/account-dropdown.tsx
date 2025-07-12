'use client'

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { deleteSession } from '@/lib/session'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'
import type { PropsWithChildren } from 'react'
import { toast } from 'sonner'

export const AccountDropdown = ({ children }: PropsWithChildren) => {
	const router = useRouter()

	const handleLogout = async () => {
		try {
			await deleteSession()
			toast.success('Logout successfully', {
				id: 'logout',
			})
			router.replace('/login')
		} catch (error) {
			toast.error('Logout failed', {
				id: 'logout',
			})
			console.log(error)
		}
	}
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />

				<DropdownMenuItem onClick={handleLogout}>
					<LogOut className='hover:text-current' />
					Logout
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
