import { Navbar,Container,Nav} from 'react-bootstrap';
import {Link,NavLink} from 'react-router-dom';


const NavigationBar = () => {

    const btnStyle={
        textDecoration:"none",
        color:"white",
        margin:"0px 5px",
    }

    const focus ={
        textDecoration:"none",
        color:"white",
        fontSize:"23px"
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Link  style={focus} to='/uploadDownloadFile'>Upload Files</Link>
                    <Nav className="me-right">
                        <Link style={btnStyle} to="/uploadDownloadFile/about">About</Link>
                        <Link style={btnStyle} to="/uploadDownloadFile/contact">Contact</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar