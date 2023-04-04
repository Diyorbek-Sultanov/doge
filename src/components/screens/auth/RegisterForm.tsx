import clsx from 'clsx'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { BiLogIn } from 'react-icons/bi'

import Button from '@/ui/button/Button'
import Field from '@/ui/field/Field'

import { validEmail } from '../../../shared/regex'

import { IAuthRegister } from './auth.interface'
import styles from './auth.module.scss'

const RegisterForm: FC = () => {
	const {
		formState: { errors, isDirty },
		handleSubmit,
		register
	} = useForm<IAuthRegister>({
		defaultValues: {
			tel: '',
			password: '',
			email: '',
			name: '',
			surname: ''
		},
		mode: 'onChange'
	})

	const onSubmitHandler: SubmitHandler<IAuthRegister> = data => {
		console.log(data)
	}
	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmitHandler)}>
			<div className={styles.wrapper}>
				<div>
					<label htmlFor='name'>Ваша имя</label>
					<div className={styles.iconInput}>
						<Field
							{...register('name', {
								required: 'Вы должны указать имя'
							})}
							className={clsx(styles.input, {
								[styles.inputErr]: errors?.name
							})}
							type={'name'}
							id='name'
							placeholder='Имя'
							error={errors?.name}
						/>
					</div>
				</div>
				<div>
					<label htmlFor='surname'>Ваша фамилия</label>
					<div className={styles.iconInput}>
						<Field
							{...register('surname', {
								required: 'Вы должны указать фамилию'
							})}
							className={clsx(styles.input, {
								[styles.inputErr]: errors?.surname
							})}
							type={'surname'}
							id='surname'
							placeholder='Фамилия'
							error={errors?.surname}
						/>
					</div>
				</div>
				<div>
					<label htmlFor='email'>Ваш e-mail</label>
					<div className={styles.iconInput}>
						<Field
							{...register('email', {
								required: 'Вы должны указать  e-mail',
								pattern: {
									value: validEmail,
									message: 'пожалуста укажите правильный e-mail'
								}
							})}
							className={clsx(styles.input, {
								[styles.inputErr]: errors?.email
							})}
							type={'email'}
							id='email'
							placeholder='E-mail'
							error={errors?.email}
						/>
					</div>
				</div>
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
			</div>

			<Button className={styles.btn} type='submit' disabled={!isDirty}>
				Регистрация
			</Button>
		</form>
	)
}

export default RegisterForm
