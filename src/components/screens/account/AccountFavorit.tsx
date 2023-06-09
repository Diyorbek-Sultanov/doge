import clsx from 'clsx'
import { FC } from 'react'

import CardItem from '@/ui/card/CardItem'
import Empty from '@/ui/empty/Empty'
import Heading from '@/ui/heading/Heading'

import { useTypedSelector } from '@/hooks/useTypedSelector'

import styles from '../favorit/favorit.module.scss'

import style from './account.module.scss'

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
					<div className={clsx(styles.wrapper, style.wrap)}>
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
