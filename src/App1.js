import React from 'react'
import App from './App';
import { Redirect, Route, Switch } from 'react-router-dom';
import About from './component/About';
import Contact from './component/Contact';
import NavigationBar from './component/NavigationBar';
import MyFooter from './component/MyFooter';
import NotFound from './component/NotFound';

const App1 = () => {
    return (
        <div>
            <NavigationBar />
            <Switch>

                <Route exact path='/' component={App}></Route>
                <Route exact path='/uploadDownloadFile' component={App}></Route>
                <Route path='/uploadDownloadFile/contact' component={Contact}></Route>
                <Route path='/uploadDownloadFile/about' component={About}></Route>
                <Route component={NotFound}></Route>

            </Switch>
            <MyFooter />
        </div>
    )
}

export default App1