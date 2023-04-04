import { FC } from 'react'

import RegisterForm from './RegisterForm'
import styles from './auth.module.scss'

const Register: FC = () => {
	return (
		<div className={styles.login}>
			<div className={styles.content}>
				<h1>Регистрация</h1>
				<div>
					<p>Добро пожаловить в Doge</p>
				</div>
			</div>
			<RegisterForm />
		</div>
	)
}

export default Register
