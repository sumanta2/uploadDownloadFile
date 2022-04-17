import React from 'react';
import {saveAs} from 'file-saver'
// import { FiDownload } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
import './styles/ShowData.css'
//import { motion } from "framer-motion"
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'

const myStyle={
    display:"inline-block",
}

const pStyle={
    width:"270px",
    height:"31px",
    marginLeft:"0.5em",
    marginRight:"0.5em",
    marginBottom :"0.5em",
    color:"#461b1b",
    backgroundColor:"rgb(0 0 0 / 20%)",
    borderRadius:"5px",
}

const ShowData = ({ id, name, url,fileName,fileType,time }) => {

    // const myDownload=()=>{
    //     var blob = new Blob([url],{type: "application/text"});

    //     saveAs(blob, `${fileName}`);
    // }
    const showContent=()=>{
            saveAs(url)
    }

    if(fileName.split('.')[0].length >18)
    {
        fileName=(fileName.split('.')[0].substring(0,15)+'... .'+fileName.split('.')[1])
        
    }

    return (
        <>
            {/* <motion.div {/* whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }} */}
            {/* {console.log("mytime"+time)} */}
            <div id={id} className='dataContainer'>
                <p style={pStyle}>{fileName}</p>
                {}
                <div className='d-flex justify-content-around align-items-center myPointer'>
                    <h6>Owner: {name}</h6>  
                <div>
                   <a href={url} target="_blank" download ><AiOutlineEye/></a>
                    </div>
                </div>
            </div>
            {/* </motion.div> */}
        </>
    )
}
export default ShowData;