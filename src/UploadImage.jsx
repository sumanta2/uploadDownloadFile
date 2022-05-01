import React, { useEffect, useState } from 'react'
import storage from './Firebase'
//import firebase from 'firebase/app';
// import  {getMetadata}  from "firebase/storage";
// import {getData} from './actions/index'
// import { useDispatch } from "react-redux";
import ProgressBar from "@ramonak/react-progress-bar";
import { useDropzone } from 'react-dropzone'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './styles/UploadImages.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import upload from './image/uploadEdit.png';


const UploadImage = ({ myData, getProgress, setProgress, setImageData, showProgress, setShowProgress, setUrl1 }) => {
    const [image, setImage] = useState()
    const [getUrl, setUrl] = useState("");

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: (acceptedFiles) => {

            setImage(acceptedFiles[0]);
            setImageData({ name: acceptedFiles[0].name, type: acceptedFiles[0].type })
            setShowProgress(true)

            const uploadImage = storage.ref(acceptedFiles[0].name).put(acceptedFiles[0]);

            uploadImage.on("state_changed", (snapshot) => { setProgress(Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100) - 1) }, (err) => {
                console.log(err)
                toast.error('Already one file in this name are present 🤡', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setShowProgress(false)
                setProgress(0)
            },
                () => {
                    storage.ref().child(acceptedFiles[0].name).getDownloadURL().then((imageUrl) => {
                        setProgress(100)
                        myData(false);
                        // setUrl(imageUrl)
                        setUrl1(imageUrl)
                        toast.success('Upload Files SuccessFully 🤡', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    })

                })
        }
    })

    // const dispatch=useDispatch()

    //     useEffect(()=>{
    //         dispatch(getData(getUrl))

    //     },[getUrl])



    return (
        <>
            {showProgress && <div className='progressBar'>  <ProgressBar completed={getProgress} /> </div>}

            <div className="dragFile" {...getRootProps()} style={{ display: `${showProgress ? 'none' : ''}`,backgroundImage:{upload} }} >
                { !isDragActive && <img src={upload} alt="upload file" height='144px' width='280px' /> }
                <input {...getInputProps()} />
            </div>
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
        </>
    )
}
export default UploadImage;

