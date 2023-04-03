import { FC } from 'react'

import Empty from '@/ui/empty/Empty'

import { useTypedSelector } from '@/hooks/useTypedSelector'

import CartEmptyImg from '@/assets/images/cart-empty.png'

import CartItem from './CartItem'
import CartOrder from './CartOrder'
import styles from './cart.module.scss'

const Cart: FC = () => {
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
					<CartOrder />
				</div>
			) : (
				<Empty title={'Корзина Пустая!'} img={CartEmptyImg} />
			)}
		</div>
	)
}

export default Cart
