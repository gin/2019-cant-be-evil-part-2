import ReactRouter from 'react-router-dom;
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;

import Nav from './Nav';
import Home from './Home';
import Sat from './Sat';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className='container'>
                    <Nav />
                    <Route exact path='/' component={Home} />
                    <Route path='/sat' component={Sat} />
                </div>
            </Router>
        )
    }
}