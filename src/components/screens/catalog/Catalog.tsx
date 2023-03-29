import { FC } from 'react'
import { useParams } from 'react-router-dom'

import CardItem from '@/ui/card/CardItem'
import Location from '@/ui/location/Location'

import { cardSliderData } from '../home/cardSlider/cardSlider.data'

import styles from './catalog.module.scss'
import CatalogSelect from './catalogSelect/CatalogSelect'

const Catalog: FC = () => {
	const { name } = useParams<{ name?: string }>()

	return (
		<>
			<Location />
			<div className={styles.catalog}>
				<div className={styles.select}>
					<CatalogSelect />
				</div>
				<div className={styles.wrapper}>
					{cardSliderData.map((item, i) => (
						<CardItem item={item} key={i} />
					))}
				</div>
			</div>
		</>
	)
}

export default Catalog
