import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import Footer from './footer/Footer'
import Header from './header/Header'
import styles from './layout.module.scss'

const Layout: FC = () => {
	return (
		<div className={styles.layout}>
			<Header />
			<main className={styles.main}>
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}

export default Layout
