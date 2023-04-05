import { FC } from 'react'
import { BiUserCircle } from 'react-icons/bi'
import { BsBookmark } from 'react-icons/bs'
import { CgShoppingBag } from 'react-icons/cg'
import { IoSettingsOutline } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'

import styles from './account.module.scss'

const SidebarList: FC = () => {
	return (
		<ul className={styles.list}>
			<NavLink
				to='profil'
				className={({ isActive }) =>
					isActive ? 'active-account' : styles.link
				}
			>
				<BiUserCircle fontSize={18} />
				Профиль
			</NavLink>
			<NavLink
				to='cart'
				className={({ isActive }) =>
					isActive ? 'active-account' : styles.link
				}
			>
				<CgShoppingBag fontSize={18} />
				Корзина
			</NavLink>
			<NavLink
				to='favorit'
				className={({ isActive }) =>
					isActive ? 'active-account' : styles.link
				}
			>
				<BsBookmark fontSize={18} />
				Избранные
			</NavLink>
			<NavLink
				to='edit'
				className={({ isActive }) =>
					isActive ? 'active-account' : styles.link
				}
			>
				<IoSettingsOutline fontSize={18} />
				Натсройка профилья
			</NavLink>
		</ul>
	)
}

export default SidebarList
