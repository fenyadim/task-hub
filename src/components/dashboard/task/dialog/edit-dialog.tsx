import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import type { PropsWithChildren } from 'react'
import { InputDialog } from './input-dialog'

interface IEditDialog extends PropsWithChildren {}

export const EditDialog = ({ children }: IEditDialog) => {
	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Edit task</DialogTitle>
				</DialogHeader>
				<form>
					<InputDialog label='Title' name='title' />
				</form>
			</DialogContent>
		</Dialog>
	)
}
