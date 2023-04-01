import { FC } from 'react'
import { BsBagPlus } from 'react-icons/bs'

import Button from '@/components/ui/button/Button'

import { useTypedSelector } from '@/hooks/useTypedSelector'

import styles from './cart.module.scss'

const CartOrder: FC = () => {
	const { cart } = useTypedSelector(state => state.cart)

	const total = cart.reduce((acc, item) => item.price * item.count + acc, 0)

	return (
		<div className={styles.order}>
			<div className={styles.info}>
				<h3>Оформить покупку</h3>
				<p>Общая цена:</p>
				<h4>{total} млн.uzs</h4>
				<p>О достваке</p>
				<span>
					Risk more than others think is safe. Dream more than others think is
					practical. Risk more than others think is safe. Dream more than others
					think is practical.
				</span>
			</div>
			<Button className={styles.btn}>
				<BsBagPlus fontSize={16} />
				Оформить покупку
			</Button>
		</div>
	)
}

export default CartOrder
