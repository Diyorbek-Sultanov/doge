import { FC } from 'react'

import ProductInfo from './ProductInfo'
import ProductOrder from './ProductOrder'
import ProductTab from './ProductTab'
import styles from './productDetail.module.scss'

const ProductDetail: FC = () => {
	return (
		<div className={styles.product}>
			<div className={styles.wrapper}>
				<ProductInfo />
				<ProductOrder />
			</div>
			<ProductTab />
		</div>
	)
}

export default ProductDetail
