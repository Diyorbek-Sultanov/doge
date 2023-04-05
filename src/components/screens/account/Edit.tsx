import { ChangeEvent, FC, useRef, useState } from 'react'

import User from '@/assets/images/user.png'

import PersonData from './PersonData'
import styles from './account.module.scss'

const Edit: FC = () => {
	const ref = useRef<HTMLInputElement>(null)
	const [imageUrl, setImageUrl] = useState('')

	const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
		const { files } = e.target
		const selectedFile = files as FileList

		setImageUrl(selectedFile?.[0].name)
		console.log(imageUrl)
	}

	return (
		<div className={styles.account}>
			<h3>Персональные данные</h3>
			<div className={styles.head}>
				<div className={styles.avatar} onClick={() => ref.current?.click()}>
					<img src={imageUrl} alt='user' />
				</div>
				<h3>Abbos Janizakov</h3>
			</div>
			<input
				onChange={handleChangeFile}
				ref={ref}
				type='file'
				hidden
				accept='image/*'
			/>
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

export default Edit
