import { FC } from 'react'

import Empty from '@/ui/empty/Empty'

import { useTypedSelector } from '@/hooks/useTypedSelector'

import CartEmptyImg from '@/assets/images/cart-empty.png'

import CartItem from '../cart/CartItem'
import styles from '../cart/cart.module.scss'

const AccoutCart: FC = () => {
	const { cart } = useTypedSelector(state => state.cart)

	return (
		<div className={styles.cart}>
			{cart.length ? (
				<div className={styles.wrapper}>
					<div className={styles.itemWrapper}>
						{cart.map(item => (
							<CartItem item={item} key={item.id} />
						))}
					</div>
				</div>
			) : (
				<Empty title={'Корзина Пустая!'} img={CartEmptyImg} />
			)}
		</div>
	)
}

export default AccoutCart
