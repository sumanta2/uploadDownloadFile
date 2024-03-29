import React, { useEffect, useState } from 'react';
import StoreData from '../StoreData';
//--import {PulseLoader} from 'react-spinners'
import SkeletonComp from './SkeletonComp';

// import { useSelector } from "react-redux";
// import 'bootstrap';
import '../../src/styles/reactcontact.css'
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextField from '@mui/material/TextField';

const Reactcontact = ({ getData, setData, setProgress, imageData, setShowProgress, Url1 }) => {
    const [toggleValue, setToggleValue] = useState(true)
    const storeData = process.env.REACT_APP_storeData
    const [user, setuser] = useState({
        name: '',
        password: '',
    });

    const [value, setMyValue] = useState({})
    const [loading,setLoading]=useState(false)

    // const myState = useSelector((state) =>
    //     (state.changeUrl));

    useEffect(() => {
        getdata()
    }, [])

    const checkVal = () => {
        setToggleValue(!toggleValue)
        //console.log(toggleValue);
    }

    const getdata = async () => {  ////----------------------------------
        try {
            setLoading(true)
            const result = await fetch(storeData)
            // console.log(result)
            const data = await result.json()
            setMyValue(data)
            setLoading(false)
            //console.log(data)
        }
        catch (err) {
            console.log("Error to fetch All Data")
            setLoading(false)
        }
    }
    const getUserData = (event) => {
        const { name, value } = event.target;
        setuser((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }
    const postData = async (e) => {
        e.preventDefault()
        const { name } = user;
        if(user.password=="" && toggleValue){
            toast.warn('Blank password does not Allowed', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else if (name && Url1) {
            setProgress(0);
            try {
                setShowProgress(false);
                const res = await fetch(storeData, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",   //here using fetch api and post request we connect to the firebase database and send json data.The URL(first parameter value of the fetch method) get from firebase server and edit some place in this url 
                    },
                    body: JSON.stringify({
                        id: new Date().getTime().toString(),
                        name: user.name,
                        imgUrl: Url1,
                        fileName: imageData.name,
                        fileType: imageData.type,
                        isPassword: toggleValue,
                        password: user.password,
                        time: moment(new Date()).format("Do MMM YYYY"),
                    })
                }

                );
                setTimeout(() => {
                    setData(true)
                }, 2000)
                if (res) {
                    //alert("Data inserted successfully")         //-------------------------------------------------------------------
                    //dark mode of toast notification is not work
                    toast.success('Data Inserted SuccessFully 🤡', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    setuser({
                        name: '',
                        password: '',
                    })
                    getdata()
                }
            }
            catch (err) {
                console.log("Error for server side")
            }
        }
        else if (Url1 == "") {
            alert("image was not upload properly please wait a while")
        }
        else {
            alert("Blank data not allowed/Please wait for properly upload the image")
        }
    }


    // const mar = {
    //     margin: "10px",
    // }
    return (
        <>
            <form className="myForm myStyle" method='POST'>
                <h4 className='heading4'>Enter Details</h4>

                <div className="" style={{ margin: "10px" }}>
                    <span style={{ float: "left" }}>Owner</span>
                    <input className='inputStyle' style={{ width: "160px", marginLeft: "33px" }} type='text' name='name' placeholder="Enter your name" value={user.name} onChange={getUserData} autoComplete="off" required />
                    {/* <TextField className="inputStyle"name='name' style={{ width: "160px", marginLeft: "33px",padding:"0px" }} type='text' label="Enter your name" variant="standard" value={user.name} onChange={getUserData} autoComplete="off" required  /> */}

                </div>
                <span style={{ float: "left" }}>Password</span>
                    <div className="form-check form-switch" style={{ margin: "10px" }} >
                        {/* <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{ !toggleValue && 'use Password'}</label> */}
                        <input type="password" className={`inputStyle ${!toggleValue? 'disabledColor':''}`} name="password" disabled={!toggleValue} style={{ width: "127px", marginLeft: "-10px"}} value={user.password} onChange={getUserData} placeholder="Enter Password" />
                        <input className="form-check-input" type="checkbox" name="isPassword" onChange={checkVal} value={true} style={{float:"right",marginRight:"5px"}} checked={toggleValue}/>
                </div>

                <div className="" style={{ margin: "10px" }}>
                    <button className="btn btn-outline-success" onClick={postData} disabled={getData}>
                        Submit
                    </button>
                </div>
            </form>
            {loading ? <div className="skeleton"><SkeletonComp/>  <SkeletonComp/></div>  :  <StoreData value={value} getData={getdata} />}
            
            {/* its toastContainer present in app1.js file */}
        </>
    )
}
export default Reactcontact;

// {
//   "rules": {
//     ".read": "now < 1636828200000",  // 2021-11-14
//     ".write": "now < 1636828200000",  // 2021-11-14
//   }
// }