import { cartActions } from './cart/cart.slice'
import { favoritActions } from './favorit/favorit.slice'
import { modalActions } from './modal/modal.slice'

export const allActions = {
	...favoritActions,
	...cartActions,
	...modalActions
}
