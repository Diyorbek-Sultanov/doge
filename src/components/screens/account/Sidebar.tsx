import { FC } from 'react'
import { BiLogOutCircle } from 'react-icons/bi'

import Button from '@/ui/button/Button'

import { useActions } from '@/hooks/useActions'

import User from '@/assets/images/user.png'

import SidebarList from './SidebarList'
import styles from './account.module.scss'

const Sidebar: FC = () => {
	const { toggleModal } = useActions()

	return (
		<div className={styles.sidebar}>
			<div className={styles.wrapper}>
				<div className={styles.avatar}>
					<img src={User} alt='user' />
				</div>
				<h3>Abbos Janizakov</h3>
				<SidebarList />
				<Button
					className={styles.btn}
					onClick={() => toggleModal({ type: 'open' })}
				>
					<BiLogOutCircle cursor={'default'} />
					Выйти из аккаунта
				</Button>
			</div>
		</div>
	)
}

export default Sidebar
