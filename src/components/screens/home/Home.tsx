import { FC } from 'react'

import Brands from './Brands'
import CardSlider from './cardSlider/CardSlider'
import styles from './home.module.scss'
import MainCategory from './mainCategory/MainCategory'
import Slider from './mainSlider/Slider'

const Home: FC = () => {
	return (
		<div className={styles.home}>
			<Slider />
			<MainCategory />
			<CardSlider />
			<Brands />
		</div>
	)
}

export default Home
