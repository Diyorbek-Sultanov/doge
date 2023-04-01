import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const favoritSlice = createSlice({
	name: 'favorit',
	initialState,
	reducers: {}
})

export const favoritReducer = favoritSlice.reducer
export const favoritActions = favoritSlice.actions
