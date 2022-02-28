import React from 'react';
import {saveAs} from 'file-saver'
// import { FiDownload } from "react-icons/fi";
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

    // const myDownload=()=>{
    //     var blob = new Blob([url],{type: "application/text"});

    //     saveAs(blob, `${fileName}`);
    // }
    const showContent=()=>{
            saveAs(url)
    }

    return (
        <>
            <div id={id} className='dataContainer'>
                <p style={pStyle}>{fileName}</p>
                <div className='d-flex justify-content-around align-items-center myPointer'>
                    <h5>Owner: {name}</h5>  
                <div>
                   <a href={url} target="_blank" download ><AiOutlineEye/></a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ShowData;