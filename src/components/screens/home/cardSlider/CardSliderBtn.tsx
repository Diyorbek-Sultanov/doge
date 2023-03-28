import { FC } from 'react'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import { useSwiper } from 'swiper/react'

import styles from './cardSlider.module.scss'

const CardSliderBtn: FC = () => {
	const swiper = useSwiper()

	return (
		<div className={styles.btns}>
			<button onClick={() => swiper.slidePrev()}>
				<RiArrowLeftSLine />
			</button>
			<button onClick={() => swiper.slideNext()}>
				<RiArrowRightSLine />
			</button>
		</div>
	)
}

export default CardSliderBtn
