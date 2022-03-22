import './App.css';
import Reactcontact from './component/reactcontact';
import UploadImage from './UploadImage';

// import { useSelector } from "react-redux";   
import { useState } from 'react';

function App() {
  const [checkProgress,setcheckProgress]=useState(true)
  const [getProgress,setProgress]=useState(0);
  const [imageData,setImageData]=useState({name:"",type:""})
  const [showProgress,setShowProgress]=useState(false)

  // const [fileName,setFileName]=useState("suman")

  return (
    <div className="App">
       <UploadImage myData={setcheckProgress} getProgress={getProgress} setProgress={setProgress} setImageData={setImageData} showProgress={showProgress} setShowProgress={setShowProgress}/>

       <Reactcontact getData={checkProgress} setData={setcheckProgress} setProgress={setProgress} imageData={imageData} setShowProgress={setShowProgress}/>
      
    </div>
  );
}

export default App;
