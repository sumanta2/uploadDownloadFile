import React,{useState} from 'react'
import { Form, Button } from 'react-bootstrap'

export default function Contact() {
    // Need some modification in this page also
    const [data, setdata] = useState({name1:"",details:""})

        const myChange=(e)=>{
            var {name,value} = e.target 
            setdata((preVal)=>{
                return {
                ...preVal,
                [name]:value
            }})
        }

        const submitData =(e) =>{
            e.preventDefault()
            // here write submit operation code
            console.log("FormData is",data)
            setdata((preVal)=>{
                return {
                    name1:"",
                    details:""
                }
            })
         
        }
    return(
        <div className='container'>
        <h4>Enter Details Here</h4>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Your Name</label>
                <input type="text" name="name1" onChange={myChange} value={data.name1} className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Details Information</label>
                <textarea placeholder='Enter Some Information' onChange={myChange} value={data.details} name="details" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" className='btn mx-2 my-2 btn-outline-success' onClick={submitData}>Submit</button>

        </div>
    )
}
