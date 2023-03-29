import clsx from 'clsx'
import { FC, useState } from 'react'
import { FiMapPin } from 'react-icons/fi'

import { useOutside } from '@/hooks/useOutside'

import { addToLocalStorage } from '../../../../utils/addToLs'
import { getToLocalStorage } from '../../../../utils/getToLs'
import styles from '../header.module.scss'

import { regionData } from './region.data'

const Region: FC = () => {
	const [active, setActive] = useState('')
	const { isShow, ref, setIsShow } = useOutside(false)

	return (
		<div className={styles.region}>
			<FiMapPin onClick={() => setIsShow(!isShow)} fontSize={18} />
			<span onClick={() => setIsShow(!isShow)}>
				{getToLocalStorage('region')}
			</span>
			{isShow && (
				<div className={styles.wrapper} ref={ref}>
					<h2>Выберите ваше геолокация</h2>
					<ul className={styles.list}>
						{regionData.map(item => (
							<li
								className={clsx(styles.li, {
									[styles.liActive]: active === item.region
								})}
								key={item.region}
								onClick={() =>
									addToLocalStorage(item.region, setActive, 'region')
								}
							>
								{item.region}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}

export default Region
