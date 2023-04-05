import { FC, useEffect } from 'react'

import ProductInfo from './ProductInfo'
import ProductOrder from './ProductOrder'
import ProductTab from './ProductTab'
import styles from './productDetail.module.scss'

const ProductDetail: FC = () => {
	useEffect(() => window.scrollTo(0, 0), [])

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
