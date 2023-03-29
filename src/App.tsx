import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from '@/components/layout/Layout'
import Catalog from '@/components/screens/catalog/Catalog'
import Home from '@/components/screens/home/Home'
import ProductDetail from '@/components/screens/productDetail/ProductDetail'

const App: FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='/catalog/:name' element={<Catalog />} />
				<Route path='/catalog/:name/:slug' element={<ProductDetail />} />
			</Route>
		</Routes>
	)
}

export default App
