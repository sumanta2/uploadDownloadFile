import React from 'react';
import ShowData from './ShowData';


const StoreData=({value})=>{
    const design={
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"center",
        margin:"4px"
    }
    return(
    <>  
        <div style={design}>
        {
            value!= null &&
        (Object.entries(value).reverse().map(([key,{id,imgUrl,name,fileName,fileType,time,isPassword,password}])=>{  //this method i see sunny singha youtube channel hulu clone video's 1:06:40  part
           return   <ShowData key={id} name={name} url={imgUrl} fileName={fileName} fileType={fileType} time={time} isPassword={isPassword} password={password}/>  
        }))}
        {value == null && <p>No Data found</p>}
        </div>
    </>
    )
}

export default StoreData;
