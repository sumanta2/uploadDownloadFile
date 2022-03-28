import React, { useEffect, useState,useRef } from 'react'
import storage from './Firebase'
// import  {getMetadata}  from "firebase/storage";
import {getData} from './actions/index'
import { useDispatch } from "react-redux";
// import {ProgressBar} from 'react-bootstrap';
import ProgressBar from "@ramonak/react-progress-bar";
// import { BsFillFileEarmarkImageFill } from "react-icons/bs";
import {useDropzone} from 'react-dropzone'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './styles/UploadImages.css'



const UploadImage = ({myData, getProgress, setProgress, setImageData,showProgress,setShowProgress}) => {
    const [image, setImage] = useState()
    const [getUrl,setUrl]=useState("");

    const {getRootProps,getInputProps,isDragActive} = useDropzone({
        onDrop:(acceptedFiles)=>{
            // console.log(acceptedFiles[0].type)
            // acceptedFiles.map((file)=>{console.log(URL.createObjectURL(file))})

            setImage(acceptedFiles[0]);
            // console.log("su"+acceptedFiles[0])
            setImageData({name:acceptedFiles[0].name,type:acceptedFiles[0].type})
            setShowProgress(true)
            const uploadImage=storage.ref(acceptedFiles[0].name).put(acceptedFiles[0]);
            uploadImage.on("state_changed",(snapshot)=>{setProgress(Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*100)-1)},(err)=>{console.log(err)},
            ()=>{
                storage.ref().child(acceptedFiles[0].name).getDownloadURL().then((imageUrl)=>{
                    setProgress(100)
                    myData(false);
                    setUrl(imageUrl)
                })

            })

            // setDragUpload(
            // acceptedFiles.map((file)=>{Object.assign(file,{
            //     preview:URL.createObjectURL(file)
            // })}))
        }
    })

const dispatch=useDispatch()

// const filePickerRef=useRef()

    useEffect(()=>{
        dispatch(getData(getUrl))
                
    },[getUrl])

    // const upLoadImage=(e)=>{ 

    //     setImage(e.target.files[0]);
    //     setImageData({name:e.target.files[0].name,type:e.target.files[0].type})
    //     setShowProgress(true)
    //     const uploadImage=storage.ref(e.target.files[0].name).put(e.target.files[0]);
    //     uploadImage.on("state_changed",(snapshot)=>{setProgress(Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*100)-1)},(err)=>{console.log(err)},
    //     ()=>{
    //         storage.ref().child(e.target.files[0].name).getDownloadURL().then((imageUrl)=>{
    //             setProgress(100)
    //             myData(false);
    //             setUrl(imageUrl)
    //         })

    //     })
        // if (getProgress == 0)
        // {
        //     setProgress(9)
        // }
        // setTimeout(()=>{   //this method used for testing purpose
        //     console.log("Hello")  
        //     setProgress(100)
        //     myData(false)
        // },1000)

    //}

    // const upload = () => 
    // {  
    //     filePickerRef.current.click()
    //     if (image == null)
    //         return;
    // }
    // dragUpload?.map((file)=>{console.log(file)})

    return (
        <>
            <h1>Upload Files</h1>

            {/* <div style={{"height":"40px"}}> */}
                {/* {(getProgress != 0) &&   <h3>{`Your uploading progress is ${Math.abs(getProgress)} `}</h3> } */}
                {showProgress && <div className='progressBar'>  <ProgressBar completed={getProgress} /> </div> }
            {/* </div> */}
            {/* {getUrl && <img src={getUrl} style={{width:"300px",height:"200px "}} alt="Upload"/>}<br></br> */}
            {/* <input type="file" style={{display:'none'}} ref={filePickerRef} onChange={(e) => { upLoadImage(e) }} /> */}
            
            {/* <button className='btn btn-outline-success m-4' onClick={upload}> <BsFillFileEarmarkImageFill/></button> */}
            <div className="dragFile" {...getRootProps()} style={{display:`${showProgress? 'none': ''}`}} >
                <input {...getInputProps()} />
                {isDragActive ? "Drop it like it's hot!" : 'Click me or drag a file to upload!'}
            </div>
        </>
    )
}
export default UploadImage;

