import { FC } from 'react'
import { BiHomeAlt } from 'react-icons/bi'
import { Link, useLocation } from 'react-router-dom'

import { ECategory } from '@/components/layout/header/category/catagory.interface'

import styles from './location.module.scss'

const Location: FC = () => {
	const { pathname } = useLocation()

	return (
		<div className={styles.location}>
			{pathname === `/catalog/kitchen` ? (
				<div className={styles.path}>
					<Link className={styles.link} to='/'>
						<BiHomeAlt cursor={'pointer'} color='#999' /> | <span>Каталог</span>
					</Link>
					|<span className={styles.pathActive}>{ECategory.KUX}</span>
				</div>
			) : pathname === '/catalog/phones' ? (
				<div className={styles.path}>
					<Link className={styles.link} to='/'>
						<BiHomeAlt cursor={'pointer'} color='#999' /> | <span>Каталог</span>
					</Link>
					|<span className={styles.pathActive}>{ECategory.TEL}</span>
				</div>
			) : pathname === '/catalog/appliances' ? (
				<div className={styles.path}>
					<Link className={styles.link} to='/'>
						<BiHomeAlt cursor={'pointer'} color='#999' /> | <span>Каталог</span>
					</Link>
					|<span className={styles.pathActive}>{ECategory.BIT}</span>
				</div>
			) : pathname === '/catalog/auto' ? (
				<div className={styles.path}>
					<Link className={styles.link} to='/'>
						<BiHomeAlt cursor={'pointer'} color='#999' /> | <span>Каталог</span>
					</Link>
					|<span className={styles.pathActive}>{ECategory.AUTO}</span>
				</div>
			) : pathname === '/catalog/tv' ? (
				<div className={styles.path}>
					<Link className={styles.link} to='/'>
						<BiHomeAlt cursor={'pointer'} color='#999' /> | <span>Каталог</span>
					</Link>
					|<span className={styles.pathActive}>{ECategory.TV}</span>
				</div>
			) : pathname === '/catalog/phone-accesories' ? (
				<div className={styles.path}>
					<Link className={styles.link} to='/'>
						<BiHomeAlt cursor={'pointer'} color='#999' /> | <span>Каталог</span>
					</Link>
					|<span className={styles.pathActive}>{ECategory.TELACC}</span>
				</div>
			) : (
				''
			)}
		</div>
	)
}

export default Location
