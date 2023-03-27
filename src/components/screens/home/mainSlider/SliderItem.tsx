import { FC } from 'react'

import { IMainSlider } from './slider.interface'
import styles from './slider.module.scss'

const SliderItem: FC<{ item: IMainSlider }> = ({ item }) => {
	return (
		<div className={styles.item}>
			<div className={styles.content}>
				<h2>{item.persentage}</h2>
				<h3>{item.title}</h3>
				<p>{item.text}</p>
			</div>
			<img src={item.img} alt='slider-img' />
		</div>
	)
}

export default SliderItem
