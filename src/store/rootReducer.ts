import { combineReducers } from '@reduxjs/toolkit'

import { cartReducer } from './cart/cart.slice'
import { favoritReducer } from './favorit/favorit.slice'

export const rootReducer = combineReducers({
	favorit: favoritReducer,
	cart: cartReducer
})
