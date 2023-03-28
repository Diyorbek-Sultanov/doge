import { FC } from 'react'
import { FiBookmark } from 'react-icons/fi'
import { RiShoppingBagLine } from 'react-icons/ri'

import { ICardSlider } from '@/components/screens/home/cardSlider/cardSlider.interface'

import styles from './cardItem.module.scss'

const CardSliderItem: FC<{ item: ICardSlider }> = ({ item }) => {
	return (
		<div className={styles.item}>
			<img src={item.img} alt={item.name} />
			<div className={styles.favorit}>
				<FiBookmark color='#fff' fontSize={20} />
			</div>
			<RiShoppingBagLine className={styles.icon} fontSize={20} />
			<div className={styles.content}>
				<h3>{item.name}</h3>
				<h4>{item.price}</h4>
			</div>
		</div>
	)
}

export default CardSliderItem
