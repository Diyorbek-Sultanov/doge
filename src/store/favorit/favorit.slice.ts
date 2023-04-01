import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { IFavorit, IFavoritPayload } from './favorit.interface'

const initialState: IFavorit = {
	favorites: []
}

const favoritSlice = createSlice({
	name: 'favorit',
	initialState,
	reducers: {
		addFavorit: (state, action: PayloadAction<IFavoritPayload>) => {
			const id = state.favorites.length
			state.favorites.push({ ...action.payload, id })
		},
		removeFavorit: (state, action: PayloadAction<{ id: number }>) => {
			state.favorites = state.favorites.filter(
				item => item.id !== action.payload.id
			)
		}
	}
})

export const favoritReducer = favoritSlice.reducer
export const favoritActions = favoritSlice.actions
