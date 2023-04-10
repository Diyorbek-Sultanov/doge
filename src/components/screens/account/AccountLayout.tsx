import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import BreadCrumb from '@/ui/breadcrumb/BreadCrumb'

import Sidebar from './Sidebar'
import styles from './account.module.scss'

const AccountLayout: FC = () => {
	return (
		<div className={styles.layout}>
			<BreadCrumb />
			<div className={styles.layouWrapper}>
				<Outlet />
				<Sidebar />
			</div>
		</div>
	)
}

export default AccountLayout
