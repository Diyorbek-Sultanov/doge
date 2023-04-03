import { FC } from 'react'
import { Link } from 'react-router-dom'

import Button from '@/ui/button/Button'

import { IEmpty } from './empty.interface'
import styles from './empty.module.scss'

const Empty: FC<IEmpty> = ({ img, title }) => {
	return (
		<div className={styles.empty}>
			{img && (
				<div className={styles.eImg}>
					<img src={img} alt='cart-empty' />
				</div>
			)}
			<h1>{title}</h1>
			<Link to='/'>
				<Button className={styles.eBtn}>Вернуться в магазин</Button>
			</Link>
		</div>
	)
}

export default Empty
