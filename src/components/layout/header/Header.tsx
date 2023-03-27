import { FC } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { BsBookmark } from 'react-icons/bs'
import { FaBalanceScale } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { RiShoppingBagLine } from 'react-icons/ri'

import Field from '@/components/ui/field/Field'

import Doge from '@/assets/images/doge-logo.png'

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
						<li>Платёжная система</li>
						<li>Служба доставки</li>
						<li>Помощь</li>
					</ul>
				</div>

				<Contact />
			</div>

			<div className={styles.bottom}>
				<img src={Doge} alt='logo' />

				<div className={styles.cat}>
					<div className={styles.drop}>
						<span>Смартфоны</span> <MdOutlineKeyboardArrowDown />
					</div>
					<div className={styles.field}>
						<Field
							type={'search'}
							placeholder={'Поиск товаров'}
							className={styles.search}
						/>
						<FiSearch className={styles.searchIcon} fontSize={20} />
					</div>
					<div className={styles.iconList}>
						<BsBookmark cursor='pointer' fontSize={22} />
						<FaBalanceScale cursor='pointer' fontSize={22} />
						<AiOutlineUser cursor='pointer' fontSize={22} />
						<RiShoppingBagLine cursor='pointer' fontSize={22} />
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
