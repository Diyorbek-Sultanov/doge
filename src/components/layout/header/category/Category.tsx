import clsx from 'clsx'
import { FC, useState } from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

import styles from '../header.module.scss'

import { catagoryData } from './category.data'

const Category: FC = () => {
	const [active, setActive] = useState(0)
	const [open, setOpen] = useState(false)

	return (
		<div className={styles.drop}>
			<span onClick={() => setOpen(!open)}>Категоры</span>
			<MdOutlineKeyboardArrowDown />

			<div
				className={clsx(styles.dropWrapper, {
					[styles.dropWrapperActive]: open
				})}
			>
				<ul>
					{catagoryData.map((item, i) => (
						<li
							className={clsx(styles.dropLi, {
								[styles.dropLiActive]: active === i
							})}
							key={item.catagory}
							onClick={() => setActive(i)}
						>
							{item.catagory}
							<img src={item.img} alt='' />
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Category
