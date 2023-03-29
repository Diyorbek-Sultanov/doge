import { Dispatch, SetStateAction } from 'react'

export const addToLocalStorage = (
	region: string,
	setActive: Dispatch<SetStateAction<string>>,
	key: string
) => {
	setActive(region)
	localStorage.setItem(key, region)
}
