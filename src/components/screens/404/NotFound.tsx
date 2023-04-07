import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '@/ui/button/Button'

import styles from './notfound.module.scss'

const NotFound: FC = () => {
	const navigate = useNavigate()

	return (
		<div className={styles.not}>
			<h1>404</h1>
			<p>Page not found</p>
			<Button className={styles.btn} onClick={() => navigate('/')}>
				Вернуться в магазин
			</Button>
		</div>
	)
}

export default NotFound
