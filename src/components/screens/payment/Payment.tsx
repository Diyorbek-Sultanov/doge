import { FC } from 'react'

import BreadCrumb from '@/ui/breadcrumb/BreadCrumb'

import styles from './payment.module.scss'

const Payment: FC = () => {
	return (
		<>
			<BreadCrumb />
			<div className={styles.payment}>
				<h1>Какие возможные платёжные системы Dodge</h1>
				<p>
					За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые
					версии появились по ошибке, некоторые - намеренно (например,
					юмористические варианты).
				</p>
				<p className={styles.itali}>
					За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые
					версии появились по ошибке, некоторые - намеренно (например,
					юмористические варианты).
				</p>
				<p>
					За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые
					версии появились по ошибке, некоторые - намеренно (например,
					юмористические варианты). За прошедшие годы текст Lorem Ipsum получил
					много версий. Некоторые версии появились по ошибке, некоторые -
					намеренно (например, юмористические варианты).{' '}
				</p>
				<p>
					За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые
					версии появились по ошибке, некоторые - намеренно (например,
					юмористические варианты).
				</p>
			</div>
		</>
	)
}

export default Payment
