import { Navbar,Container,Nav} from 'react-bootstrap';
import {Link,NavLink} from 'react-router-dom';


const NavigationBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand  href='/uploadDownloadFile'>Upload Files</Navbar.Brand>
                    <Nav className="me-right">
                        <Nav.Link href="/uploadDownloadFile/about">About</Nav.Link>
                        <Nav.Link href="/uploadDownloadFile/contact">Contact</Nav.Link>
                        <Link style={{textDecoration:"none"}} to="/uploadDownloadFile/contact">contact</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar