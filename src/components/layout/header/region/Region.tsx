import clsx from 'clsx'
import { FC, useState } from 'react'
import { FiMapPin } from 'react-icons/fi'

import { useOutside } from '@/hooks/useOutside'

import styles from '../header.module.scss'

import { regionData } from './region.data'

const Region: FC = () => {
	const [active, setActive] = useState(0)
	const { isShow, ref, setIsShow } = useOutside(false)

	return (
		<div className={styles.region}>
			<FiMapPin fontSize={18} />
			<span onClick={() => setIsShow(!isShow)}>Ташкент</span>
			<div className={styles.wrapper} ref={ref}>
				<h2>Выберите ваше геолокация</h2>
				<ul className={styles.list}>
					{regionData.map((item, i) => (
						<li
							className={clsx(styles.li, {
								[styles.liActive]: active === i
							})}
							key={item.region}
							onClick={() => setActive(i)}
						>
							{item.region}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Region
