import { ICardSlider } from '@/components/screens/home/cardSlider/cardSlider.interface'

export interface IFavorit {
	favorites: ICardSlider[]
}

export interface IFavoritPayload extends Omit<ICardSlider, 'id'> {}
