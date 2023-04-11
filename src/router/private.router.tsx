import { FC, PropsWithChildren } from 'react'
import { Navigate } from 'react-router-dom'

const user = false

const PrivateRouter: FC<PropsWithChildren<unknown>> = ({ children }) => {
	if (!user) {
		return <Navigate to='/auth/login' />
	}

	return <div>{children}</div>
}

export default PrivateRouter
