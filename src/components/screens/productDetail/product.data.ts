import IphoneSmall2 from '@/assets/images/iphone-2.png'
import IphoneSmall3 from '@/assets/images/iphone-3.png'
import IphoneSmall4 from '@/assets/images/iphone-4.png'
import IphoneSmall5 from '@/assets/images/iphone-5.png'
import Iphone from '@/assets/images/iphone.png'

import { IProductDetail } from './product.interface'

export const productData: IProductDetail = {
	id: 1,
	brand: 'Apple',
	camera: '14Mpx',
	dioganal: '6.7',
	images: [
		{
			smallImg: Iphone
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
