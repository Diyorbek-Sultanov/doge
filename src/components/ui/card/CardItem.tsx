import { FC } from 'react'
import { toast } from 'react-hot-toast'
import { AiOutlineClose } from 'react-icons/ai'
import { FiBookmark } from 'react-icons/fi'
import { IoBag } from 'react-icons/io5'
import { RiShoppingBagLine } from 'react-icons/ri'

import { ICardSlider } from '@/components/screens/home/cardSlider/cardSlider.interface'

import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'

import styles from './cardItem.module.scss'

const CardSliderItem: FC<{ item: ICardSlider }> = ({ item }) => {
	const { addFavorit, removeFavorit, addToCart } = useActions()
	const { favorites } = useTypedSelector(state => state.favorit)
	const { cart } = useTypedSelector(state => state.cart)

	const findFavorit =
		favorites.length && favorites.find(favo => favo.id === item.id)

	const isExistsCart = cart.some(c => c.id === item.id)

	const onClickFavorit = () => {
		addFavorit(item)
		toast.success('Добавлено в избранное', {
			style: {
				backgroundColor: '#333',
				color: '#fff'
			}
		})
	}

	const onClickCart = () => {
		addToCart(item)
		toast.success('Добавлено в корзину', {
			style: {
				backgroundColor: '#333',
				color: '#fff'
			}
		})
	}

	return (
		<div className={styles.item}>
			<img src={item.img} alt={item.name} />

			{findFavorit ? (
				<div
					className={styles.remove}
					onClick={() => removeFavorit({ id: item.id })}
				>
					<AiOutlineClose fill='#F70000' fontSize={20} />
				</div>
			) : (
				<div className={styles.favorit} onClick={onClickFavorit}>
					<FiBookmark color='#fff' fontSize={20} />
				</div>
			)}
			{isExistsCart ? (
				<IoBag className={styles.icon} fontSize={20} fill='#999' />
			) : (
				<RiShoppingBagLine
					className={styles.icon}
					fontSize={20}
					onClick={onClickCart}
				/>
			)}
			<div className={styles.content}>
				<h3>{item.name}</h3>
				<h4>{item.price} uzs</h4>
			</div>
		</div>
	)
}

export default CardSliderItem
