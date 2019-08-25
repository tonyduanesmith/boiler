import React, { Fragment } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { MuiThemeProvider } from '@material-ui/core'
import theme from './theme'
import { history } from './history'
import { Router } from 'react-router'
import MainRoutes from './routes/MainRoutes'

function App() {
	return (
		<Fragment>
			<Provider store={store}>
				<MuiThemeProvider theme={theme}>
					<Router history={history}>
						<MainRoutes />
					</Router>
				</MuiThemeProvider>
			</Provider>
		</Fragment>
	)
}

export default App
