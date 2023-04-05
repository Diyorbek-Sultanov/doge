import { FC } from 'react'

import User from '@/assets/images/user.png'

import PersonData from './PersonData'
import styles from './account.module.scss'

const Profil: FC = () => {
	return (
		<div className={styles.account}>
			<h3>Персональные данные</h3>
			<div className={styles.head}>
				<div className={styles.avatar}>
					<img src={User} alt='user' />
				</div>
				<h3>Abbos Janizakov</h3>
			</div>
			<PersonData />
			<h3>Логин данные</h3>
			<div className={styles.personData}>
				<div>
					<span>Ваш логин</span>
					<p>+998 94 609-34-44</p>
				</div>
				<div>
					<span>Ваш пароль</span>
					<p>************</p>
				</div>
			</div>
		</div>
	)
}

export default Profil
