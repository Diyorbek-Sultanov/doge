import { ICardSlider } from '@/components/screens/home/cardSlider/cardSlider.interface'

export interface ICart {
	cart: ICardSlider[]
}

export interface ICartPayload extends Omit<ICardSlider, 'id'> {}

export interface ICartCountPayload extends Pick<ICardSlider, 'id'> {
	type: 'plus' | 'minus'
}
