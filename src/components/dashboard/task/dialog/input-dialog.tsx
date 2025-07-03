import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import type { ComponentProps } from 'react'

interface IInputDialog extends ComponentProps<'input'> {
	label: string
	name: string
}

export const InputDialog = ({ label, name, ...props }: IInputDialog) => {
	return (
		<div className='grid flex-1 gap-2'>
			<Label htmlFor={name}>{label}</Label>
			<Input {...props} id={name} name={name} />
		</div>
	)
}
