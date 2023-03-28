import { FC } from 'react'
import { Autoplay, Pagination, Virtual } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import SliderItem from './SliderItem'
import { sliderData } from './slider.data'
import styles from './slider.module.scss'

import 'swiper/css'
import 'swiper/css/pagination'

const Slider: FC = () => {
	return (
		<div className={styles.slider}>
			<Swiper
				modules={[Virtual, Pagination, Autoplay]}
				spaceBetween={10}
				slidesPerView={1}
				draggable={true}
				pagination={{ clickable: true }}
				autoplay={{
					delay: 2000,
					disableOnInteraction: false
				}}
				virtual
			>
				{sliderData.map((item, i) => (
					<SwiperSlide key={i} virtualIndex={i}>
						<SliderItem item={item} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default Slider
