import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';

export default function Contact() {
    // Need some modification in this page also
    const [data, setdata] = useState({ name1: "dd", email: "sumantagorai.21@gmail.com", details: "jdididdkdd" })

    const storeInformation = process.env.REACT_APP_storeInformation

    const myChange = (e) => {
        var { name, value } = e.target
        setdata((preVal) => {
            return {
                ...preVal,
                [name]: value
            }
        })
    }

    const submitData = async (e) => {
        e.preventDefault()
        const { name1, email, details } = data
        if (name1 && email && details) {

            try { 

                const res = await fetch(storeInformation, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",   //here using fetch api and post request we connect to the firebase database and send json data.The URL(first parameter value of the fetch method) get from firebase server and edit some place in this url 
                    },
                    body: JSON.stringify({
                        id: new Date().getTime().toString(),
                        name1: name1,
                        email: email,
                        details: details,
                        time: moment(new Date()).format("Do MMM YYYY"),
                    })
                })
                if (res) {
                    toast.success('Upload information SuccessFully', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    setdata((preVal) => {
                        return {
                            name1: "",
                            email: "",
                            details: ""
                        }
                    })
                }
            }
            catch (err) {
                console.log(err)
                toast.error('Error From server end', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                return
            }
            
        }
        else {
            toast.error('Please Enter Proper value', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }

        // console.log("FormData is", data)
    }
    return (
        <div className='container'>
            <h4>Enter Details Here</h4>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Your Name</label>
                <input type="text" name="name1" onChange={myChange} value={data.name1} className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name" required />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Your Email</label>
                <input type="email" name="email" onChange={myChange} value={data.email} className="form-control" id="exampleFormControlInput2" placeholder="Enter Your Email" required />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Details Information</label>
                <textarea placeholder='Enter Some Information' onChange={myChange} value={data.details} name="details" className="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
            </div>
            <button type="submit" className='btn mx-2 my-2 btn-outline-success' onClick={submitData}>Submit</button>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
}
