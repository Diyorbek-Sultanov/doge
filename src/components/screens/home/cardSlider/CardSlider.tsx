import clsx from 'clsx'
import { FC } from 'react'
import { Autoplay, Navigation, Virtual } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import CardSliderItem from '@/components/ui/card/CardItem'
import Heading from '@/components/ui/heading/Heading'

import CardSliderBtn from './CardSliderBtn'
import { cardSliderData } from './cardSlider.data'
import styles from './cardSlider.module.scss'

import 'swiper/css'

const CardSlider: FC = () => {
	return (
		<>
			<Heading>Супер цена</Heading>
			<div className={clsx(styles.slider, 'slider')}>
				<Swiper
					modules={[Virtual, Autoplay, Navigation]}
					spaceBetween={24}
					slidesPerView={4}
					draggable={true}
					navigation={true}
					loop={true}
					autoplay={{
						delay: 2000,
						disableOnInteraction: false
					}}
					virtual
				>
					{cardSliderData.map((item, i) => (
						<SwiperSlide key={i} virtualIndex={i}>
							<CardSliderItem item={item} />
						</SwiperSlide>
					))}
					<CardSliderBtn />
				</Swiper>
			</div>
		</>
	)
}

export default CardSlider
