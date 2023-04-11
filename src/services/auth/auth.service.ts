import axios from 'axios'
import Cookie from 'js-cookie'

import { IAuthResponse } from '@/store/user/user.interface'

import { getContentType } from '../../api/api.helper'

import { saveToStorage } from './auth.helper'

export const AuthService = {
	async getNewTokens() {
		const refreshToken = Cookie.get('refreshToken')

		const response = await axios.post<string, { data: IAuthResponse }>(
			'localhost',
			{ refreshToken },
			{ headers: getContentType() }
		)

		if (response.data.accessToken) {
			saveToStorage(response.data)
		}

		return response
	}
}
