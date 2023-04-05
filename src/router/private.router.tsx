import { FC, PropsWithChildren } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const user = false

const PrivateRouter: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const location = useLocation()

	if (!user) {
		return <Navigate to='/auth/login' state={{ from: location }} />
	}

	return <div>{children}</div>
}

export default PrivateRouter
