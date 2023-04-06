import clsx from 'clsx'
import { FC } from 'react'

import Button from '@/ui/button/Button'

import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'

import styles from './account.module.scss'

const Modal: FC = () => {
	const { type } = useTypedSelector(state => state.modal)
	const { toggleModal } = useActions()

	return (
		<div
			className={clsx(styles.modal, {
				[styles.modalOpen]: type === 'open'
			})}
		>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<h1>Выйте из аккаунта</h1>
					<p>Уважаемый покупатель, на сентябрь объявлена ​​скидка 50%!</p>
					<div className={styles.btns}>
						<Button
							className={styles.btnBlack}
							onClick={() => toggleModal({ type: 'close' })}
						>
							Случано
						</Button>
						<Button className={styles.btnOrange}>Выйти</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Modal
