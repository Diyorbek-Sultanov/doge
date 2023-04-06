import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { IModal } from './modal.interface'

const initialState: IModal = {
	type: 'close'
}

const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		toggleModal: (state, action: PayloadAction<IModal>) => {
			state.type = action.payload.type
		}
	}
})

export const modalReducer = modalSlice.reducer
export const modalActions = modalSlice.actions
