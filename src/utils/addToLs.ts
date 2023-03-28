import { Dispatch, SetStateAction } from 'react'

export const addToLocalStorage = (
	region: string,
	setActive: Dispatch<SetStateAction<string>>
) => {
	setActive(region)
	localStorage.setItem('region', region)
}
