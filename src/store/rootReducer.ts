import { combineReducers } from '@reduxjs/toolkit'

import { cartReducer } from './cart/cart.slice'
import { favoritReducer } from './favorit/favorit.slice'
import { modalReducer } from './modal/modal.slice'

export const rootReducer = combineReducers({
	favorit: favoritReducer,
	cart: cartReducer,
	modal: modalReducer
})
