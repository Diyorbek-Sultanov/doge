import { FC } from 'react'

import Heading from '@/components/ui/heading/Heading'

import CardSlider from './cardSlider/CardSlider'
import styles from './home.module.scss'
import MainCategory from './mainCategory/MainCategory'
import Slider from './mainSlider/Slider'

const Home: FC = () => {
	return (
		<div className={styles.home}>
			<Slider />
			<MainCategory />
			<Heading>Супер цена</Heading>
			<CardSlider />
		</div>
	)
}

export default Home
