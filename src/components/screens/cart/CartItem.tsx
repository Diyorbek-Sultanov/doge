import { FC } from 'react'
import { toast } from 'react-hot-toast'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { BiTrash } from 'react-icons/bi'
import { BsBookmark } from 'react-icons/bs'

import { useActions } from '@/hooks/useActions'

import { ICardSlider } from '../home/cardSlider/cardSlider.interface'

import styles from './cart.module.scss'

const CartItem: FC<{ item: ICardSlider }> = ({ item }) => {
	const { removeToCart, changeQuantity, addFavorit } = useActions()

	const onClickFavorit = () => {
		addFavorit(item)
		toast.success('Добавлено в избранное', {
			style: {
				backgroundColor: '#333',
				color: '#fff'
			}
		})
	}

	return (
		<div className={styles.item}>
			<div className={styles.imgWrapper}>
				<div className={styles.img}>
					<img src={item.img} alt={item.name} />
				</div>
				<div>
					<h3>{item.name}</h3>
					<p>{item.price}</p>
				</div>
			</div>
			<div className={styles.change}>
				<div className={styles.icons}>
					<BsBookmark cursor='pointer' onClick={onClickFavorit} />
					<BiTrash
						cursor='pointer'
						onClick={() => removeToCart({ id: item.id })}
					/>
				</div>
				<div className={styles.calc}>
					<div
						className={styles.icon}
						onClick={() => changeQuantity({ id: item.id, type: 'minus' })}
					>
						<AiOutlineMinus />
					</div>
					<span>{item.count ? item.count : 1}</span>
					<div
						className={styles.icon}
						onClick={() => changeQuantity({ id: item.id, type: 'plus' })}
					>
						<AiOutlinePlus />
					</div>
				</div>
			</div>
		</div>
	)
}

export default CartItem
