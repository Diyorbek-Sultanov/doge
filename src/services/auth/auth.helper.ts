import Cookie from 'js-cookie'

import { ITokens } from '@/store/user/user.interface'
import { IAuthResponse } from '@/store/user/user.interface'

export const saveTokensStorage = (data: ITokens) => {
	Cookie.set('accessToken', data.accessToken)
	Cookie.set('refreshToken', data.refreshToken)
}

export const getAccesToken = () => {
	const accessToken = Cookie.get('accessToken')

	return accessToken || null
}

export const removeTosStorage = () => {
	Cookie.remove('accessToken')
	Cookie.remove('refreshToken')
	Cookie.remove('user')
}

export const saveToStorage = (data: IAuthResponse) => {
	saveTokensStorage(data)
	Cookie.set('user', JSON.stringify(data.user))
}
