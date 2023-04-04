import clsx from 'clsx'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { AiOutlineEye, AiTwotoneEyeInvisible } from 'react-icons/ai'
import { BiLogIn } from 'react-icons/bi'

import Button from '@/ui/button/Button'
import Field from '@/ui/field/Field'

import { IAuth } from './auth.interface'
import styles from './auth.module.scss'

const Login: FC = () => {
	const [eye, setEye] = useState<'hidden' | 'open'>('hidden')
	const {
		formState: { errors, isDirty },
		handleSubmit,
		register
	} = useForm<IAuth>({
		defaultValues: {
			tel: '',
			password: ''
		},
		mode: 'onChange'
	})

	const onSubmitHandler: SubmitHandler<IAuth> = data => {
		console.log(data)
	}

	return (
		<div className={styles.login}>
			<div className={styles.content}>
				<h1>Вход в аккаунт</h1>
				<div>
					<p>Войдите в аккаунт</p>
				</div>
			</div>
			<form className={styles.form} onSubmit={handleSubmit(onSubmitHandler)}>
				<div className={styles.wrapper}>
					<div>
						<label htmlFor='tel'>Ваш номер</label>
						<div className={styles.iconInput}>
							<Field
								{...register('tel', {
									required: 'Вы должны указать телефон номер',
									minLength: {
										value: 10,
										message: 'Номер должен быть не менее 10 чисель'
									}
								})}
								className={clsx(styles.input, {
									[styles.inputErr]: errors?.tel
								})}
								type={'tel'}
								id='tel'
								placeholder='+998'
								error={errors?.tel}
							/>
							<BiLogIn className={styles.iconLogIn} />
						</div>
					</div>
					<div>
						<label htmlFor='password'>Ваш пароль</label>
						<div className={styles.iconInput}>
							<Field
								{...register('password', {
									required: 'Вы должны указать пароль',
									minLength: {
										value: 8,
										message:
											'Пароль должен быть не менее 8 символов и состоять из латинских букв и символов.'
									}
								})}
								className={clsx(styles.input, {
									[styles.inputErr]: errors?.password
								})}
								type={eye === 'open' ? 'text' : 'password'}
								id='password'
								placeholder='Пароль'
								error={errors?.password}
							/>
							{eye === 'hidden' ? (
								<AiTwotoneEyeInvisible
									className={styles.icon}
									onClick={() => setEye('open')}
								/>
							) : (
								<AiOutlineEye
									className={styles.icon}
									onClick={() => setEye('hidden')}
								/>
							)}
						</div>
					</div>
				</div>

				<Button className={styles.btn} type='submit' disabled={!isDirty}>
					Войти
				</Button>
			</form>
		</div>
	)
}

export default Login
