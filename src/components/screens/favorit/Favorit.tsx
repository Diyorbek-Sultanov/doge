import { FC } from 'react'

import CardItem from '@/ui/card/CardItem'
import Empty from '@/ui/empty/Empty'
import Heading from '@/ui/heading/Heading'

import { useTypedSelector } from '@/hooks/useTypedSelector'

import styles from './favorit.module.scss'

const Favorit: FC = () => {
	const { favorites } = useTypedSelector(state => state.favorit)

	return (
		<div className={styles.favorit}>
			{favorites.length ? (
				<>
					<div className={styles.head}>
						<Heading>Избранное</Heading>
						<span>Избранные продукты: {favorites.length}</span>
					</div>
					<div className={styles.wrapper}>
						{favorites.map(item => (
							<CardItem item={item} key={item.id} />
						))}
					</div>
				</>
			) : (
				<Empty title={'Избранное пусто'} />
			)}
		</div>
	)
}

export default Favorit
