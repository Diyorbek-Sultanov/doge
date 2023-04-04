import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import Sidebar from './Sidebar'
import styles from './auth.module.scss'

const AuthLayout: FC = () => {
	return (
		<div className={styles.layout}>
			<Outlet />
			<Sidebar />
		</div>
	)
}

export default AuthLayout
