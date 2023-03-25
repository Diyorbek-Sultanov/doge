import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'

type TypeOut = {
	ref: any
	isShow: boolean
	setIsShow: Dispatch<SetStateAction<boolean>>
}

export const useOutside = (initialVisible: boolean): TypeOut => {
	const [isShow, setIsShow] = useState(initialVisible)
	const ref = useRef<HTMLDivElement>(null)

	const handleClickOutside = (event: any) => {
		if (ref.current && !ref.current.contains(event?.target)) {
			setIsShow(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true)

		return () => {
			document.removeEventListener('click', handleClickOutside, true)
		}
	}, [])

	return { ref, isShow, setIsShow }
}
