import {Route, Switch} from 'react-router-dom'
import FrontLayout from './components/layouts/FrontLayout'
import Home from './pages/home/Home'

const AppRoute = ({component: Component, layout: Layout, ...rest}: any) => (
   <Route {...rest} render={ props => (
        <Layout><Component {...props}></Component></Layout> 
   )}></Route>
)

const Routes = () => {
    return (
        <Switch>
            <AppRoute path="/" exact={true} layout={FrontLayout} component={Home} />
        </Switch>
    )
}

export default Routes
