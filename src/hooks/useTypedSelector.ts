import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { AppRootState } from '@/store/store'

export const useTypedSelector: TypedUseSelectorHook<AppRootState> = useSelector
