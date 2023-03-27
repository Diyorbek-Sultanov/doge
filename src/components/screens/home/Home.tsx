import { FC } from 'react'

import styles from './home.module.scss'
import MainCategory from './mainCategory/MainCategory'
import Slider from './mainSlider/Slider'

const Home: FC = () => {
	return (
		<div className={styles.home}>
			<section className={styles.sliderSec}>
				<Slider />
				<MainCategory />
			</section>
		</div>
	)
}

export default Home
