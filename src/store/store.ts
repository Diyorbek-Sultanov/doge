import { configureStore } from '@reduxjs/toolkit'
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
	persistReducer,
	persistStore
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { rootReducer } from './rootReducer'

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['favorit']
}

const persisterReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
	reducer: persisterReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE]
			}
		})
})

export const persistor = persistStore(store)

export type AppRootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export default store
