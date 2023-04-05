import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import Sidebar from './Sidebar'
import styles from './account.module.scss'

const AccountLayout: FC = () => {
	return (
		<div className={styles.layout}>
			<Outlet />
			<Sidebar />
		</div>
	)
}

export default AccountLayout
