import { FC } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { BsBookmark } from 'react-icons/bs'
import { FaBalanceScale } from 'react-icons/fa'
import { FiMapPin } from 'react-icons/fi'
import { FiSearch } from 'react-icons/fi'
import { IoLanguageSharp } from 'react-icons/io5'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { RiShoppingBagLine } from 'react-icons/ri'

import Field from '@/components/ui/field/Field'

import Doge from '@/assets/images/doge-logo.png'

import styles from './header.module.scss'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles.top}>
				<div className={styles.map}>
					<span className={styles.region}>
						<FiMapPin fontSize={18} />
						Ташкент
					</span>

					<ul className={styles.list}>
						<li>Карта сайта</li>
						<li>Платёжная система</li>
						<li>Служба доставки</li>
						<li>Помощь</li>
					</ul>
				</div>

				<div className={styles.contact}>
					<span>
						<IoLanguageSharp fontSize={18} />
						Русский
					</span>
					<p>+998 71 123-45-67</p>
					<p>1201</p>
				</div>
			</div>

			<div className={styles.bottom}>
				<img src={Doge} alt='logo' />

				<div className={styles.cat}>
					<div>
						Смартфоны <MdOutlineKeyboardArrowDown />
					</div>
					<div>
						<Field
							type={'search'}
							placeholder={'Поиск товаров'}
							className={styles.search}
						/>
						<FiSearch />
					</div>
					<div className={styles.iconList}>
						<BsBookmark />
						<FaBalanceScale />
						<AiOutlineUser />
						<RiShoppingBagLine />
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
