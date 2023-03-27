import AppLi from '@/assets/images/appliances-2.png'
import Auto from '@/assets/images/auto.png'
import Headphone from '@/assets/images/headphone.png'
import Kux from '@/assets/images/kux.png'
import Phone from '@/assets/images/phone.png'
import Tv from '@/assets/images/tv.png'

import { ECategory, ICategory } from './catagory.interface'

export const catagoryData: ICategory[] = [
	{
		catagory: ECategory.BIT,
		img: AppLi
	},
	{
		catagory: ECategory.TEL,
		img: Phone
	},
	{
		catagory: ECategory.KUX,
		img: Kux
	},
	{
		catagory: ECategory.AUTO,
		img: Auto
	},
	{
		catagory: ECategory.TV,
		img: Tv
	},
	{
		catagory: ECategory.TELACC,
		img: Headphone
	}
]
