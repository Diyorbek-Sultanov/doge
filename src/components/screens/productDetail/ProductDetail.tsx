import { FC } from 'react'

import ProductInfo from './ProductInfo'
import ProductOrder from './ProductOrder'
import styles from './productDetail.module.scss'

const ProductDetail: FC = () => {
	return (
		<div className={styles.product}>
			<div className={styles.wrapper}>
				<ProductInfo />
				<ProductOrder />
			</div>
		</div>
	)
}

export default ProductDetail
