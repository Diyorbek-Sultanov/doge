import { FC } from 'react'

import { IMainCategory } from './mainCategory.interface'
import styles from './mainCategory.module.scss'

const MainCategoryItem: FC<{ item: IMainCategory }> = ({ item }) => {
	return (
		<div className={styles.item}>
			<img src={item.img} alt={item.title} />
			<div>
				<h3>{item.title}</h3>
				<p>{item.text}</p>
			</div>
		</div>
	)
}

export default MainCategoryItem
