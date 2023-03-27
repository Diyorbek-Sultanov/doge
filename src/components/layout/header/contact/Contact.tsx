import clsx from 'clsx'
import { FC, useState } from 'react'
import { IoLanguageSharp } from 'react-icons/io5'

import { useOutside } from '@/hooks/useOutside'

import styles from '../header.module.scss'

import { langData } from './contact.data'

const Contact: FC = () => {
	const [active, setActive] = useState(0)
	const { isShow, ref, setIsShow } = useOutside(false)

	return (
		<div className={styles.contact}>
			<span onClick={() => setIsShow(!isShow)}>
				<IoLanguageSharp fontSize={18} />
				Русский
			</span>
			{isShow && (
				<div className={styles.wrapper} ref={ref}>
					<ul>
						{langData.map((item, i) => (
							<li
								className={clsx(styles.contactLi, {
									[styles.contactLiActive]: active === i
								})}
								key={item.lang}
								onClick={() => setActive(i)}
							>
								{item.lang}
							</li>
						))}
					</ul>
				</div>
			)}
			<p>+998 71 123-45-67</p>
			<p>1201</p>
		</div>
	)
}

export default Contact
