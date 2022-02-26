import React from 'react';
import {saveAs} from 'file-saver'
import { FiDownload } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
import './styles/ShowData.css'

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

const ShowData = ({ id, name, url,fileName,fileType }) => {

    const myDownload=()=>{
        //var blob = new Blob([url], {type: "text/plain;charset=utf-8"});
        //saveAs(blob, "hello world.txt");

        var blob = new Blob([url], {type: `${fileType}`});
        saveAs(blob, `${fileName}`)
    }
    const showContent=()=>{
        saveAs(url, `${fileName}`)
    }

    return (
        <>
            <div id={id} className='dataContainer'>
                {/* <img src={`${url}`} alt={message} style={{ }} alt="Upload" /> */}
                <p style={pStyle}>{fileName}</p>
                <div className='d-flex justify-content-around align-items-center myPointer'>
                    <h5>Owner: {name}</h5>
                    {/* <a href={url} download={fileName}><FiDownload/></a> */}
                <div>
                    {/* <AiOutlineEye className='dIcon ' onClick={showContent}/> */}
                    {/* <FiDownload className='dIcon' onClick={myDownload}/> */}
                    <FiDownload className='dIcon' onClick={showContent}/>

                    </div>
                </div>
            </div>
        </>
    )
}
export default ShowData;