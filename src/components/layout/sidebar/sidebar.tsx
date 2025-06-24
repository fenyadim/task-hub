import { AccountButton } from './account-button'
import { MENU_ITEMS, PROJECT_ITEMS } from './constants'
import { SidebarItem } from './sidebar-item'

export const Sidebar = () => {
	return (
		<div className='py-5 px-3 min-w-[240px] bg-sidebar flex flex-col gap-4 text-gray-400'>
			<div>
				<h2>Account</h2>
				<AccountButton />
			</div>
			<div>
				<h2>Main Menu</h2>
				<ul className='flex flex-col gap-1'>
					{MENU_ITEMS.map(({ href, Icon, label }) => (
						<SidebarItem
							key={label}
							href={href}
							label={label}
							icon={<Icon className='size-5' />}
						/>
					))}
				</ul>
			</div>
			<div>
				<h2>Project</h2>
				<ul className='flex flex-col gap-1'>
					{PROJECT_ITEMS.map(({ href, label, color }) => (
						<SidebarItem
							key={label}
							href={href}
							label={label}
							icon={<span className={`block size-2.5 ${color}`} />}
						/>
					))}
				</ul>
			</div>
		</div>
	)
}
