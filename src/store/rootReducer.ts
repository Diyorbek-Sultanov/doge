import { combineReducers } from '@reduxjs/toolkit'

import { favoritReducer } from './favorit/favorit.slice'

export const rootReducer = combineReducers({
	favorit: favoritReducer
})
