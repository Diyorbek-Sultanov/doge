import clsx from 'clsx'
import { FC } from 'react'

import styles from './productDetail.module.scss'

const ProductTabItem: FC<{ text?: string; active: number }> = ({
	text,
	active
}) => {
	return (
		<>
			<div
				className={clsx(styles.tab, {
					[styles.tabActive]: active === 1
				})}
			>
				<div className={styles.wrapper}>
					<div className={styles.basis}>
						<p>Основные характеристики</p>
						<div className={styles.basisWrapper}>
							<div>
								<span>Brand</span>
								<h3>Apple</h3>
							</div>
							<div>
								<span>Вес (гр)</span>
								<h3>238</h3>
							</div>
							<div>
								<span>Степень защиты</span>
								<h3>IP68</h3>
							</div>
							<div>
								<span>Габариты (ШxВxТ) мм</span>
								<h3>78.1x160.8x7.65</h3>
							</div>
							<div>
								<span>Материал корпуса</span>
								<h3>Металл и стекло</h3>
							</div>
							<div>
								<span>Версия ОС</span>
								<h3>iOS 15</h3>
							</div>
						</div>
					</div>
					<div className={styles.basis}>
						<p>Основные характеристики</p>
						<div className={styles.basisWrapper}>
							<div>
								<span>Brand</span>
								<h3>Apple</h3>
							</div>
							<div>
								<span>Вес (гр)</span>
								<h3>238</h3>
							</div>
							<div>
								<span>Степень защиты</span>
								<h3>IP68</h3>
							</div>
							<div>
								<span>Габариты (ШxВxТ) мм</span>
								<h3>78.1x160.8x7.65</h3>
							</div>
							<div>
								<span>Материал корпуса</span>
								<h3>Металл и стекло</h3>
							</div>
							<div>
								<span>Версия ОС</span>
								<h3>iOS 15</h3>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				className={clsx(styles.tab, {
					[styles.tabActive]: active === 2
				})}
			>
				<div className={styles.wrapper}>
					<div>{text}</div>
					<div>{text}</div>
				</div>
			</div>
		</>
	)
}

export default ProductTabItem
