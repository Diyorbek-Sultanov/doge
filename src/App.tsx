import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from '@/components/layout/Layout'
import Cart from '@/components/screens/cart/Cart'
import Catalog from '@/components/screens/catalog/Catalog'
import Delivery from '@/components/screens/delivery/Delivery'
import Favorit from '@/components/screens/favorit/Favorit'
import Help from '@/components/screens/help/Help'
import Home from '@/components/screens/home/Home'
import Payment from '@/components/screens/payment/Payment'
import ProductDetail from '@/components/screens/productDetail/ProductDetail'

const App: FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='/catalog/:name' element={<Catalog />} />
				<Route path='/catalog/:name/:slug' element={<ProductDetail />} />
				<Route path='/payment' element={<Payment />} />
				<Route path='/delivery' element={<Delivery />} />
				<Route path='/help' element={<Help />} />
				<Route path='/favorit' element={<Favorit />} />
				<Route path='/cart' element={<Cart />} />
			</Route>
		</Routes>
	)
}

export default App
