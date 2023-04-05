import { FC } from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { BsBagPlus, BsBookmark } from 'react-icons/bs'

import Button from '@/ui/button/Button'

import Delev from '@/assets/images/delev.png'

import styles from './productDetail.module.scss'

const ProductOrder: FC = () => {
	return (
		<div className={styles.order}>
			<div className={styles.wrapper}>
				<div className={styles.btns}>
					<Button className={styles.btnCart}>
						<BsBagPlus fontSize={16} />
						add to cart
					</Button>
				</div>
				<div className={styles.favorit}>
					<BsBookmark className={styles.icon} fontSize={19} />
					<span>В избранные</span>
				</div>
			</div>

			<div className={styles.delivery}>
				<div className={styles.item}>
					<AiOutlineCheck />
					<p>Доставка по Узбекистану</p>
				</div>
				<img src={Delev} alt='img' />
			</div>
		</div>
	)
}

export default ProductOrder
