import { ECategory } from '@/components/layout/header/category/catagory.interface'

import Acces from '@/assets/images/cat-accessories.svg'
import Appli from '@/assets/images/cat-appliances.svg'
import Phone from '@/assets/images/cat-phone.svg'
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
		img: Phone
	},
	{
		title: ECategory.KUX,
		text: '210 бытовая-техника',
		img: Appli
	},
	{
		title: ECategory.TELACC,
		text: '1210 телефоновых-акксосуаров',
		img: Acces
	}
]
