import { FC } from 'react'

import { productData } from './product.data'
import styles from './productDetail.module.scss'

const ProductInfo: FC = () => {
	const { brand, camera, dioganal, images, img, name, price } = productData

	return (
		<div className={styles.info}>
			<div className={styles.images}>
				{images.map((item, i) => (
					<img key={i} src={item.smallImg} draggable={false} alt='small-img' />
				))}
			</div>
			<div className={styles.bigImage}>
				<img src={img} draggable={false} alt='iphone' />
			</div>
			<div className={styles.content}>
				<div className={styles.price}>
					<span>Price</span>
					<h3>{price}</h3>
				</div>
				<p>About of product</p>
				<div className={styles.company}>
					<div>
						<span>Brand</span>
						<h3>{brand}</h3>
					</div>
					<div>
						<span>Dioganal</span>
						<h3>{dioganal}</h3>
					</div>
					<div>
						<span>Camera</span>
						<h3>{camera}</h3>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductInfo
