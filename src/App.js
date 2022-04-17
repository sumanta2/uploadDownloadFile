import './styles/App.css';
import MyFooter from './component/MyFooter';
import Reactcontact from './component/reactcontact';
import UploadImage from './UploadImage';
// import { useSelector } from "react-redux";   
import { useState } from 'react';


function App() {
  const [checkProgress,setcheckProgress]=useState(true)
  const [getProgress,setProgress]=useState(0);
  const [imageData,setImageData]=useState({name:"",type:""})
  const [showProgress,setShowProgress]=useState(false)
  const [Url1, setUrl1] = useState('')

  // const [fileName,setFileName]=useState("suman")
    
  return (
    
    <div className="App">
       <UploadImage myData={setcheckProgress} getProgress={getProgress} setProgress={setProgress} setImageData={setImageData} showProgress={showProgress} setShowProgress={setShowProgress} setUrl1={setUrl1}/>

       <Reactcontact getData={checkProgress} setData={setcheckProgress} setProgress={setProgress} imageData={imageData} setShowProgress={setShowProgress} Url1={Url1}/>
       <MyFooter/>
      
    </div>
  );
}

export default App;
