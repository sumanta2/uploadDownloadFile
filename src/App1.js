import React from 'react'
import App from './App';
import { Redirect, Route, Routes } from 'react-router-dom';
import About from './component/About';
import Contact from './component/Contact';
import NavigationBar from './component/NavigationBar';
import MyFooter from './component/MyFooter';
import NotFound from './component/NotFound';

const App1 = () => {
    return (
        <div>
            <NavigationBar />
            <Routes>

                <Route path='/' element={<App/>}></Route>
                <Route path='/uploadDownloadFile' element={<App/>}></Route>
                <Route path='/uploadDownloadFile/contact' element={<Contact/>}></Route>
                <Route path='/uploadDownloadFile/about' element={<About/>}></Route>
                <Route element={NotFound}></Route>

            </Routes>
            <MyFooter />
        </div>
    )
}

export default App1