import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from '@/components/layout/Layout'

import AuthLayout from '@/screens/account/AuthLayout'
import Login from '@/screens/account/Login'
import Cart from '@/screens/cart/Cart'
import Catalog from '@/screens/catalog/Catalog'
import Delivery from '@/screens/delivery/Delivery'
import Favorit from '@/screens/favorit/Favorit'
import Help from '@/screens/help/Help'
import Home from '@/screens/home/Home'
import Payment from '@/screens/payment/Payment'
import ProductDetail from '@/screens/productDetail/ProductDetail'

const App: FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='catalog/:name' element={<Catalog />} />
				<Route path='catalog/:name/:slug' element={<ProductDetail />} />
				<Route path='payment' element={<Payment />} />
				<Route path='delivery' element={<Delivery />} />
				<Route path='help' element={<Help />} />
				<Route path='favorit' element={<Favorit />} />
				<Route path='cart' element={<Cart />} />
				<Route path='auth' element={<AuthLayout />}>
					<Route path='login' element={<Login />} />
				</Route>
			</Route>
		</Routes>
	)
}

export default App
