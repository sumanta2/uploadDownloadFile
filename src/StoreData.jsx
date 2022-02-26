import React from 'react';
import ShowData from './ShowData';


const StoreData=({value})=>{
    return(
    <>  
        <div className='d-flex flex-row flex-wrap justify-content-center m-4'>
        {
            value!= null &&
        (Object.entries(value).map(([key,{id,imgUrl,name,fileName,fileType}])=>{  //this method i see sunny singha youtube channel hulu clone video's 1:06:40  part
           return   <ShowData key={id} name={name} url={imgUrl} fileName={fileName} fileType={fileType}/>  
        }))}
        {value == null && <p>No Data found</p>}
        </div>
    </>
    )
}

export default StoreData;
