import { FC } from 'react'

import Doge from '@/assets/images/doge-footer.png'

import styles from './footer.module.scss'

const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.wrapper}>
				<div className={styles.top}>
					<img src={Doge} alt='doge' />

					<ul>
						<li>О нас</li>
						<li>Экологичный</li>
						<li>Вакансии</li>
						<li>Оплата и доставканас</li>
					</ul>
					<span>+998 90 123-45-67</span>
				</div>
				<div className={styles.bottom}>
					<span>Copyright 2023 &copy;</span>
					<span>Development by Diyorbek Sultanov</span>
				</div>
			</div>
		</footer>
	)
}

export default Footer
