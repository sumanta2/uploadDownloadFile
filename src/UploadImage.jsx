import React, { useEffect, useState,useRef } from 'react'
import storage from './Firebase'
// import  {getMetadata}  from "firebase/storage";
import {getData} from './actions/index'
import { useDispatch } from "react-redux";
import {ProgressBar} from 'react-bootstrap';
import { BsFillFileEarmarkImageFill } from "react-icons/bs";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'



const UploadImage = ({myData, getProgress, setProgress, setImageData}) => {
    const [image, setImage] = useState()
    const [getUrl,setUrl]=useState("");

const dispatch=useDispatch()

const filePickerRef=useRef()

    useEffect(()=>{
        dispatch(getData(getUrl))
                
    },[getUrl])

    const upLoadImage=(e)=>{ 

        setImage(e.target.files[0]);
        setImageData({name:e.target.files[0].name,type:e.target.files[0].type})

        const uploadImage=storage.ref(e.target.files[0].name).put(e.target.files[0]);
        uploadImage.on("state_changed",(snapshot)=>{setProgress(Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*100)-1)},(err)=>{console.log(err)},
        ()=>{
            storage.ref().child(e.target.files[0].name).getDownloadURL().then((imageUrl)=>{
                setProgress(100)
                myData(false);
                setUrl(imageUrl)
            })

        })
        // setTimeout(()=>{   //this method used for testing purpose
        //     console.log("Hello")  
        //     setProgress(100)
        //     myData(false)
        // },1000)

    }

    const upload = () => 
    {  
        filePickerRef.current.click()
        if (image == null)
            return;
    }
    return (
        <>
            <h1>Upload Files</h1>

            <div style={{"height":"40px"}}>
                {(getProgress != 0) &&   <h3>{`Your uploading progress is ${Math.abs(getProgress)} `}</h3> }
            </div>
            {/* #Error! Progress-bar are not working here */}
            {/* {getUrl && <img src={getUrl} style={{width:"300px",height:"200px "}} alt="Upload"/>}<br></br> */}
            <input type="file" style={{display:'none'}} ref={filePickerRef} onChange={(e) => { upLoadImage(e) }} />
            
            <button className='btn btn-outline-success m-4' onClick={upload}> <BsFillFileEarmarkImageFill/></button>
        </>
    )
}
export default UploadImage;

