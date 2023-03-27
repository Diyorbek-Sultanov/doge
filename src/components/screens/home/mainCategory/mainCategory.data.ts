import { ECategory } from '@/components/layout/header/category/catagory.interface'

import Tv from '@/assets/images/cat-tv.svg'

import { IMainCategory } from './mainCategory.interface'

export const mainCategoryData: IMainCategory[] = [
	{
		title: ECategory.TV,
		text: '160 телевизоров',
		img: Tv
	},
	{
		title: ECategory.TEL,
		text: '420 телефонов',
		img: Tv
	},
	{
		title: ECategory.KUX,
		text: '210 бытовая-техника',
		img: Tv
	},
	{
		title: ECategory.TELACC,
		text: '1210 телефоновых-акксосуаров',
		img: Tv
	}
]
