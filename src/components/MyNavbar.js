import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import  {Link}  from 'react-router-dom';
import './MyNavbar.css'
function MyNavbar() {
    const [time, setTime] = React.useState(new Date().toLocaleTimeString())
    let startTime = () => {
        setTime(new Date().toLocaleTimeString())
    }
    setInterval(startTime, 1000);

    
    return(
        <>
             <Navbar bg="dark" variant="dark">
                <Container className="navbar-container">
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <Navbar.Brand>
                            <img
                                alt=""
                                src="https://image.flaticon.com/icons/png/512/3163/3163478.png"
                                width="50"
                                height="50"
                                className="d-inline-block align-top"
                            />{' '}
                            
                            
                        </Navbar.Brand>
                        <Navbar.Text className="navbarText">
                                Home
                        </Navbar.Text>
                        <Navbar.Text className="navbarTime">
                            <div id="time">Current time: {time}</div>
                        </Navbar.Text>
                    </Link>
                </Container>
            </Navbar>
            
        </>
    )
    
}


export default MyNavbar;