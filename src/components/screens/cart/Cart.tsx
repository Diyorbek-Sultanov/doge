import { FC } from 'react'

import { useTypedSelector } from '@/hooks/useTypedSelector'

import CartItem from './CartItem'
import CartOrder from './CartOrder'
import styles from './cart.module.scss'

const Cart: FC = () => {
	const { cart } = useTypedSelector(state => state.cart)

	return (
		<div className={styles.cart}>
			<div className={styles.wrapper}>
				<div className={styles.itemWrapper}>
					{cart.map(item => (
						<CartItem item={item} key={item.id} />
					))}
				</div>
				<CartOrder />
			</div>
		</div>
	)
}

export default Cart
