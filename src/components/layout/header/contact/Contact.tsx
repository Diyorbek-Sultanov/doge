import clsx from 'clsx'
import { FC, useState } from 'react'
import { IoLanguageSharp } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

import Button from '@/ui/button/Button'

import { useOutside } from '@/hooks/useOutside'

import { addToLocalStorage } from '../../../../utils/addToLs'
import { getToLocalStorage } from '../../../../utils/getToLs'
import styles from '../header.module.scss'

import { langData } from './contact.data'

const Contact: FC = () => {
	const [active, setActive] = useState('')
	const { isShow, ref, setIsShow } = useOutside(false)
	const navigate = useNavigate()

	return (
		<div className={styles.contact}>
			<span onClick={() => setIsShow(!isShow)}>
				<IoLanguageSharp fontSize={18} />
				{getToLocalStorage('lang') ? getToLocalStorage('lang') : 'English'}
			</span>
			{isShow && (
				<div className={styles.wrapper} ref={ref}>
					<ul>
						{langData.map(item => (
							<li
								className={clsx(styles.contactLi, {
									[styles.contactLiActive]: active === item.lang
								})}
								key={item.lang}
								onClick={() => addToLocalStorage(item.lang, setActive, 'lang')}
							>
								{item.lang}
							</li>
						))}
					</ul>
				</div>
			)}
			<p>+998 71 123-45-67</p>
			<p>1201</p>
			<Button className={styles.btn} onClick={() => navigate('auth/login')}>
				Войти
			</Button>
		</div>
	)
}

export default Contact
