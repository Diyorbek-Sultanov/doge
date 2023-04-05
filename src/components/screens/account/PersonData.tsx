import { FC } from 'react'

import styles from './account.module.scss'

const PersonData: FC = () => {
	return (
		<div className={styles.personData}>
			<div>
				<span>Имя</span>
				<p>Abbos</p>
			</div>
			<div>
				<span>Фамилия</span>
				<p>Janizakov</p>
			</div>
			<div>
				<span>E-mail</span>
				<p>abbosjanizakov@gmail.com</p>
			</div>
			<div>
				<span>Номер телефона</span>
				<p>+998 94 609-34-44</p>
			</div>
		</div>
	)
}

export default PersonData
