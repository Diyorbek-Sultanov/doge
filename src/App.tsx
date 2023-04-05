import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from '@/components/layout/Layout'

import AccountLayout from '@/screens/account/AccountLayout'
import Profil from '@/screens/account/Profil'
import AuthLayout from '@/screens/auth/AuthLayout'
import Login from '@/screens/auth/Login'
import Register from '@/screens/auth/Register'
import Cart from '@/screens/cart/Cart'
import Catalog from '@/screens/catalog/Catalog'
import Delivery from '@/screens/delivery/Delivery'
import Favorit from '@/screens/favorit/Favorit'
import Help from '@/screens/help/Help'
import Home from '@/screens/home/Home'
import Payment from '@/screens/payment/Payment'
import ProductDetail from '@/screens/productDetail/ProductDetail'

import PrivateRouter from './router/private.router'

const App: FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='catalog/:name' element={<Catalog />} />
				<Route path='catalog/:name/:slug' element={<ProductDetail />} />
				<Route path=':slug' element={<ProductDetail />} />
				<Route path='payment' element={<Payment />} />
				<Route path='delivery' element={<Delivery />} />
				<Route path='help' element={<Help />} />
				<Route path='favorit' element={<Favorit />} />
				<Route path='cart' element={<Cart />} />
				<Route path='auth' element={<AuthLayout />}>
					<Route path='login' element={<Login />} />
					<Route path='register' element={<Register />} />
				</Route>
				<Route
					path='account'
					element={
						<PrivateRouter>
							<AccountLayout />
						</PrivateRouter>
					}
				>
					<Route path='profil' element={<Profil />} />
				</Route>
			</Route>
		</Routes>
	)
}

export default App
