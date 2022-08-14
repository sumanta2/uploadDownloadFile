import React from 'react'
import App from './App';
import { Redirect, Route, Routes } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
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
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <MyFooter />
        </div>
    )
}

export default App1