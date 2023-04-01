import { FC } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FiBookmark } from 'react-icons/fi'
import { RiShoppingBagLine } from 'react-icons/ri'

import { ICardSlider } from '@/components/screens/home/cardSlider/cardSlider.interface'

import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'

import styles from './cardItem.module.scss'

const CardSliderItem: FC<{ item: ICardSlider }> = ({ item }) => {
	const { addFavorit, removeFavorit } = useActions()
	const { favorites } = useTypedSelector(state => state.favorit)

	const findFavorit =
		favorites.length && favorites.find(favo => favo.id === item.id)

	return (
		<div className={styles.item}>
			<img src={item.img} alt={item.name} />
			{[]}
			{findFavorit ? (
				<div
					className={styles.remove}
					onClick={() => removeFavorit({ id: item.id })}
				>
					<AiOutlineClose fill='#F70000' fontSize={20} />
				</div>
			) : (
				<div className={styles.favorit} onClick={() => addFavorit(item)}>
					<FiBookmark color='#fff' fontSize={20} />
				</div>
			)}
			<RiShoppingBagLine className={styles.icon} fontSize={20} />
			<div className={styles.content}>
				<h3>{item.name}</h3>
				<h4>{item.price}</h4>
			</div>
		</div>
	)
}

export default CardSliderItem
