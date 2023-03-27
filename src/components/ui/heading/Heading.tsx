import { FC, PropsWithChildren } from 'react'

const Heading: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<h1 className='text-text-2xl text-[#000000] font-bold mb-10'>{children}</h1>
	)
}

export default Heading
