import {Route, Switch} from 'react-router-dom'
import FrontLayout from './components/layouts/FrontLayout'
import About from './pages/about/About'
import Home from './pages/home/Home'
import Project from './pages/project/Project'
import Team from './pages/team/Team'

const AppRoute = ({component: Component, layout: Layout, ...rest}: any) => (
   <Route {...rest} render={ props => (
        <Layout><Component {...props}></Component></Layout> 
   )}></Route>
)

const Routes = () => {
    return (
        <Switch>
            <AppRoute path="/" exact={true} layout={FrontLayout} component={Home} />
            <AppRoute path="/about" layout={FrontLayout} component={About} />
            <AppRoute path="/teams" layout={FrontLayout} component={Team} />
            <AppRoute path="/projects" layout={FrontLayout} component={Project} />
        </Switch>
    )
}

export default Routes
