import React, { useState } from 'react';
import firebase from 'firebase/app';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineEye } from "react-icons/ai";
import { BsFillFileLock2Fill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import './styles/ShowData.css'
//import { motion } from "framer-motion"
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'

const myStyle = {
    display: "inline-block",
}

const pStyle = {
    width: "270px",
    height: "31px",
    marginLeft: "0.5em",
    marginRight: "0.5em",
    marginBottom: "0.5em",
    color: "#461b1b",
    backgroundColor: "rgb(0 0 0 / 20%)",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "space-around"
}

const ShowData = ({ identity, id, name, url, fileName, fileType, time, isPassword, password, getData }) => {

    const [show, setShow] = useState(false)
    const [passWord, setPassWord] = useState("");
    const handleChange = (e) => {
        setPassWord(e.target.value)
        //console.log(passWord)
    }

    const showContent = () => {
        if (isPassword) {
            try {
                setShow(!show)
                //var inputPassword = window.prompt("Enter your name: ");

                if (passWord != "") {

                    if (password === passWord) {

                        var a = document.createElement("a");
                        a.setAttribute("download", fileName);
                        a.setAttribute("target", "_blank");
                        a.setAttribute("href", url);
                        document.body.appendChild(a);
                        a.click();
                        document.body.removeChild(a);
                    }
                    else {
                        toast.error('You Enter Wrong Password 🤡', {
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    }
                }

            }
            catch (error) {
                console.log(error)
            }
            setPassWord("")
        }
        else {

            try {
                var a = document.createElement("a");
                a.setAttribute("download", fileName);
                a.setAttribute("target", "_blank");
                a.setAttribute("href", url);
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);

            }
            catch (err) {
                console.log(err)
            }
        }

    }

    if (fileName.split('.')[0].length > 18) {
        fileName = (fileName.split('.')[0].substring(0, 15) + '... .' + fileName.split('.')[1])

    }

    const deleteData = async (identity, password, url) => {
        let checkData=""
        checkData = window.prompt("Enter Your Password");
        if (checkData != "" && checkData != null ) {
            if (checkData === password) {
                try {

                    var pictureRef = await firebase.storage().refFromURL(url)
                    await pictureRef.delete()

                    await firebase.database().ref('reactfirebase/' + identity).remove();

                    toast.success('Data Deleted Successfully 🤡', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    getData()
                }
                catch (err) {
                    //console.log(err)
                    toast.error('Failed to Delete Data 🤡', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            }
            else {
                toast.error('You Enter Wrong Password 🤡', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        }
    }

    return (
        <>
            <Modal show={show} onHide={() => { setShow(false) }}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter Your Password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <input type="password" className="form-control" id="password" name='password' value={passWord} onChange={handleChange} />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => { setShow(false) }}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={showContent}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
            <motion.div whileInView={{ scale: [0, 0.8, 0.6, 0.9, 0.7, 1], opacity: [0, 1] }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}>
                {/* {console.log("mytime  " + identity)} */}
                <div id={id} className='dataContainer'>
                    <div style={pStyle}>
                        <p>{fileName}</p>
                        {isPassword && <abbr title="Password Protected"><BsFillFileLock2Fill style={{ marginTop: "7px" }} /></abbr>}
                    </div>
                    { }
                    <div className='content'>
                        <h6>Owner: {name}</h6>

                        <div>
                            <span style={{ color: "blue", cursor: "pointer" }} onClick={showContent} ><AiOutlineEye /></span>
                            {isPassword && <span style={{ cursor: "pointer" }} onClick={() => { deleteData(identity, password, url) }} ><MdDelete /></span>}
                        </div>
                    </div>
                </div>
            </motion.div>

            <ToastContainer
                position="top-right"
                autoClose={3000}
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
export default ShowData;