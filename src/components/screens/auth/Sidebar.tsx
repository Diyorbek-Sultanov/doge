import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './auth.module.scss'

const Sidebar: FC = () => {
	return (
		<div className={styles.sidebar}>
			<div className={styles.info}>
				<h3>Зачем регистрироваться?</h3>
				<p>
					Risk more than others think is safe. Dream more than others think is
					practical. Risk more than others think is safe.
				</p>
				<p>Risk more than others think is safe.</p>
			</div>
			<NavLink
				className={({ isActive }) => (isActive ? 'active-auth' : styles.link)}
				to='login'
			>
				Логин
			</NavLink>
			<br />
			<NavLink
				className={({ isActive }) => (isActive ? 'active-auth' : styles.link)}
				to='register'
			>
				Регистрация
			</NavLink>
		</div>
	)
}

export default Sidebar
