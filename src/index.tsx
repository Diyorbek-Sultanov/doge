import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

import App from './App'
import './assets/styles/index.scss'
import store from './store/store'
import { persistor } from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<Router>
			<Provider store={store}>
				<PersistGate persistor={persistor} loading={null}>
					<App />
				</PersistGate>
			</Provider>
		</Router>
	</React.StrictMode>
)
