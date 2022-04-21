import React from 'react'
import App from './App';
import { Redirect, Route, Switch } from 'react-router-dom';
import About from './component/About';
import Contact from './component/Contact';
import NavigationBar from './component/NavigationBar';
import MyFooter from './component/MyFooter';

const App1 = () => {
    return (
        <div>
            <NavigationBar />
            <Switch>

                <Route exact path='/' component={App}></Route>
                <Route exact path='/uploadDownloadFile' component={App}></Route>
                <Route exact path='/Contact' component={Contact}></Route>
                <Route exact path='/About' component={About}></Route>

            </Switch>
            <MyFooter />
        </div>
    )
}

export default App1