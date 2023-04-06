import { ChangeEvent, FC, useEffect, useRef, useState } from 'react'
import { AiOutlinePicture } from 'react-icons/ai'

import Button from '@/ui/button/Button'

import User from '@/assets/images/user.png'

import Modal from './Modal'
import PersonData from './PersonData'
import styles from './account.module.scss'

const Edit: FC = () => {
	const ref = useRef<HTMLInputElement>(null)
	const [selectedAvatar, setSelectedAvatar] = useState<Blob>()
	const [formData, setFormData] = useState({
		avatar: ''
	})

	useEffect(() => {
		if (!selectedAvatar) {
			setFormData({ ...formData, avatar: '' })
			return
		}

		const objectUrl = URL.createObjectURL(selectedAvatar)

		//DB call to save objectUrl into the DB

		setFormData({ ...formData, avatar: objectUrl })

		return () => URL.revokeObjectURL(objectUrl)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedAvatar])

	const onSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
		const { files } = e.target
		const selectedFile = files as FileList

		setSelectedAvatar(selectedFile?.[0])
	}

	return (
		<>
			<div className={styles.account}>
				<h3>Персональные данные</h3>
				<div className={styles.head}>
					<div className={styles.avatar}>
						<img src={!formData.avatar ? User : formData.avatar} alt='user' />
					</div>
					<h3>Abbos Janizakov</h3>
					<div className={styles.icon} onClick={() => ref.current?.click()}>
						<AiOutlinePicture fill='#fff' />
					</div>
				</div>
				<input
					onChange={onSelectFile}
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

				<div className={styles.btns}>
					<Button className={styles.btnOrange}>Сохранить изминение</Button>
					<Button className={styles.btnWhite}>Отменить изминение</Button>
				</div>
			</div>
			<Modal />
		</>
	)
}

export default Edit
