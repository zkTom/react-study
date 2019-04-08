import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from '../view/home'
import Login from '../view/login'

const routes = [
	{
		path: '/',
		component: Home
	},
	{
		path: '/home',
		component: Home
	},
	{
		path: '/login',
		component: Login
	}
]
//配置子路由（可嵌套）
function RouteWithSubRoutes(route) {
	return (
		<Route
			path={route.path}
			render={(props) => (
				// pass the sub-routes down to keep nesting
				<route.component {...props} routes={route.routes} />
			)}
		/>
	)
}
export default function RouteConfig() {
    return (
        <Router>
        { routes.map((route, index) => (
            <Route key={route.path} path={route.path} component={route.component}  exact />
        ))}
        </Router>
    );
}

