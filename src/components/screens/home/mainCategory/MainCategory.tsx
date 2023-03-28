import { FC } from 'react'

import MainCategoryItem from './MainCategoryItem'
import { mainCategoryData } from './mainCategory.data'
import styles from './mainCategory.module.scss'

const MainCategory: FC = () => {
	return (
		<div className={styles.mainCategory}>
			<div className={styles.wrapper}>
				{mainCategoryData.map((item, i) => (
					<MainCategoryItem item={item} key={i} />
				))}
			</div>
		</div>
	)
}

export default MainCategory
