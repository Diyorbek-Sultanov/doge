import axios from 'axios'

import { getAccesToken, removeTosStorage } from '@/services/auth/auth.helper'
import { AuthService } from '@/services/auth/auth.service'

import { errCatch, getContentType } from './api.helper'

export const instance = axios.create({
	baseURL: 'localhost://3000',
	headers: getContentType()
})

instance.interceptors.request.use(config => {
	const accessToken = getAccesToken()

	if (config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}

	return config
})

instance.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config

		if (
			(error.response.status === '401' ||
				errCatch(error) === 'jwt expired' ||
				errCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true

			try {
				await AuthService.getNewTokens()
				return instance.request(originalRequest)
			} catch (error) {
				if (errCatch(error) === 'jwt expired') {
					removeTosStorage()
				}
			}
		}

		throw error
	}
)
