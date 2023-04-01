import { cartActions } from './cart/cart.slice'
import { favoritActions } from './favorit/favorit.slice'

export const allActions = {
	...favoritActions,
	...cartActions
}
