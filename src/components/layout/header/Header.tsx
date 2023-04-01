import { FC } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { BsBookmark } from 'react-icons/bs'
import { FiSearch } from 'react-icons/fi'
import { RiShoppingBagLine } from 'react-icons/ri'
import { Link, NavLink } from 'react-router-dom'

import Field from '@/components/ui/field/Field'

import Doge from '@/assets/images/doge-logo.png'

import Category from './category/Category'
import Contact from './contact/Contact'
import styles from './header.module.scss'
import Region from './region/Region'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles.top}>
				<div className={styles.map}>
					<Region />

					<ul className={styles.list}>
						<li>Карта сайта</li>
						<Link to='/payment'>Платёжная система</Link>
						<Link to='/delivery'>Служба доставки</Link>
						<Link to='/help'>Помощь</Link>
					</ul>
				</div>
				<Contact />
			</div>

			<div className={styles.bottom}>
				<Link className={styles.logo} to='/'>
					<img src={Doge} alt='logo' />
				</Link>

				<div className={styles.cat}>
					<Category />
					<div className={styles.field}>
						<Field
							type={'search'}
							placeholder={'Поиск товаров'}
							className={styles.search}
						/>
						<FiSearch className={styles.searchIcon} fontSize={20} />
					</div>
					<div className={styles.iconList}>
						<NavLink
							className={({ isActive }) => (isActive ? 'active-link' : '')}
							to='/favorit'
						>
							<BsBookmark cursor='pointer' fontSize={22} />
						</NavLink>
						<AiOutlineUser cursor='pointer' fontSize={22} />
						<NavLink
							className={({ isActive }) => (isActive ? 'active-link' : '')}
							to='/cart'
						>
							<RiShoppingBagLine cursor='pointer' fontSize={22} />
						</NavLink>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
