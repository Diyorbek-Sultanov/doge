import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'

import { allActions } from '@/store/allActions'

import { useAppDispatch } from './useAppDispatch'

export const useActions = () => {
	const dispatch = useAppDispatch()

	return useMemo(() => bindActionCreators(allActions, dispatch), [dispatch])
}
