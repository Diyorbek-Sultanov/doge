import clsx from 'clsx'
import { FC, useState } from 'react'

import ProductTabItem from './ProductTabItem'
import styles from './productDetail.module.scss'

const text =
	'За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты). За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).'

const ProductTab: FC = () => {
	const [active, setActive] = useState(1)

	return (
		<div className={styles.tabs}>
			<div className={styles.click}>
				<span
					className={clsx(styles.item, {
						[styles.itemActive]: active === 1
					})}
					onClick={() => setActive(1)}
				>
					Характеристика
				</span>
				<span
					className={clsx(styles.item, {
						[styles.itemActive]: active === 2
					})}
					onClick={() => setActive(2)}
				>
					О продкуте
				</span>
			</div>
			<ProductTabItem active={active} />
			<ProductTabItem active={active} text={text} />
		</div>
	)
}

export default ProductTab
