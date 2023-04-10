import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import BreadCrumb from '@/ui/breadcrumb/BreadCrumb'

import Sidebar from './Sidebar'
import styles from './auth.module.scss'

const AuthLayout: FC = () => {
	return (
		<div className={styles.layout}>
			<BreadCrumb />
			<div className={styles.layoutWrapper}>
				<Outlet />
				<Sidebar />
			</div>
		</div>
	)
}

export default AuthLayout
