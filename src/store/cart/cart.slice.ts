import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { ICart, ICartCountPayload, ICartPayload } from './cart.interface'

const initialState: ICart = {
	cart: []
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<ICartPayload>) => {
			const id = state.cart.length
			state.cart.push({ ...action.payload, id })
		},
		removeToCart: (state, action: PayloadAction<{ id: number }>) => {
			state.cart = state.cart.filter(item => item.id !== action.payload.id)
		},
		changeQuantity: (state, action: PayloadAction<ICartCountPayload>) => {
			const { id, type } = action.payload
			const item = state.cart.find(item => item.id === id)

			if (item) {
				type === 'plus' ? item.count++ : item.count--
			}
		}
	}
})

export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions
