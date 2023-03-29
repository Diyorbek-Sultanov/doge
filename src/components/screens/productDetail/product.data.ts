import Iphone from '@/assets/images/iphone.png'
import IphoneSmall2 from '@/assets/images/small-iphone-2.png'
import IphoneSmall3 from '@/assets/images/small-iphone-3.png'
import IphoneSmall4 from '@/assets/images/small-iphone-4.png'
import IphoneSmall5 from '@/assets/images/small-iphone-5.png'
import IphoneSmall from '@/assets/images/small-iphone.png'

import { IProductDetail } from './product.interface'

export const productData: IProductDetail = {
	brand: 'Apple',
	camera: '14Mpx',
	dioganal: '6.7',
	img: Iphone,
	images: [
		{
			smallImg: IphoneSmall
		},
		{
			smallImg: IphoneSmall2
		},
		{
			smallImg: IphoneSmall3
		},
		{
			smallImg: IphoneSmall4
		},
		{
			smallImg: IphoneSmall5
		}
	],
	name: 'Iphone 13 Pro',
	price: '13 640 000 cўм'
}
