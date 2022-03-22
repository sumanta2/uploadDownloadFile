import React, { useEffect, useState } from 'react';
import StoreData from '../StoreData';
import { useSelector } from "react-redux";
import 'bootstrap';
import '../../src/styles/reactcontact.css'

const Reactcontact = ({ getData, setData, setProgress , imageData, setShowProgress}) => {

    const storeData=process.env.REACT_APP_storeData
    const [user, setuser] = useState({
        name: '',
    });

    const [value, setMyValue] = useState({})

    const myState = useSelector((state) =>
        (state.changeUrl));

    useEffect(() => {
        getdata()
    }, [])

    const getdata = async () => {
        try {
            const result = await fetch(storeData)
            // console.log(result)
            const data = await result.json()
            setMyValue(data)
        }
        catch (err) {
            console.log("Error to fetch All Data")
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
        setProgress(0);
        const { name } = user;
        if (name && myState) {
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
                        imgUrl: myState,
                        fileName:imageData.name,
                        fileType:imageData.type,
                    })
                }
                
                );
                setTimeout(()=>{
                    setData(true)
                },2000)
                if (res) {
                    alert("Data inserted successfully")
                    setuser({
                        name: '',
                    })
                    getdata()
                }
            }
            catch (err) {
                console.log("Error for server side")
            }
        }
        else if (myState == "") {
            alert("image was not upload properly please wait a while")
        }
        else {
            alert("Blank data not allowed/Please wait for properly upload the image")
        }
    }


    const mar = {
        margin: "10px",
    }
    return (
        <>
            <form className="myForm myStyle"  method='POST'>
                <h3>Enter Details</h3>

                <div className="" style={mar}>
                    <span style={{float:"left"}}>Owner</span>
                    <input className='inputStyle' style={{width:"170px",marginLeft:"33px"}} type='text' name='name' placeholder="Enter your name" value={user.name} onChange={getUserData} autoComplete="off" required />
                </div>

                <div className="" style={mar}>
                    <button className="btn btn-outline-success" onClick={postData} disabled={getData}>
                        Submit
                    </button>
                </div>
            </form>
            <StoreData value={value} />
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