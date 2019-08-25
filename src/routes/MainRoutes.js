import React from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'
import Home from '../views/Home/Home'

const MainRoutes = () => {
	return (
		<Switch>
			<Route exact path='/' component={Home} />
		</Switch>
	)
}

export default withRouter(MainRoutes)
