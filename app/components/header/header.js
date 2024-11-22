'use client'
// react
import { useState, useEffect } from 'react'
// image components
import Logo from '@/app/imgs/logo'
// bootstrap components
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// css
import styles from './header.module.css'

export default function Header(params) {
    const [scroll, setScroll] = useState()

    useEffect(() => {
        /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
        let prevScrollpos = window.scrollY;
        window.onscroll = function () {
            var currentScrollPos = window.scrollY;
            if (prevScrollpos > currentScrollPos) {
                // navigationBar.style.top = "0px";
                setScroll('0')
            } else {
                // navigationBar.style.top = "-50px";
                setScroll('-75px')
            }
            prevScrollpos = currentScrollPos;
        }
    })

    return (
        <header className={styles.header} style={{ top: `${scroll}` }}>
            <Navbar collapseOnSelect expand="lg" className="navbar navbar-dark  ms-3 me-3  ms-lg-5 me-lg-5">
                <Container fluid>
                    {/* logo */}
                    <Navbar.Brand href="/"><Logo /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className={styles.collapse} >
                        {/* links */}
                        <Nav className="ms-auto">
                            <Nav.Link href="/#About" className='me-lg-5'><span className='text-warning'>0.1</span> About</Nav.Link>
                            <Nav.Link href="/#Work" className='me-lg-5'><span className='text-warning'>0.2</span> Work</Nav.Link>
                            <Nav.Link href="/#Contact" className='me-lg-5'><span className='text-warning'>0.3</span> Contact</Nav.Link>
                            <Nav.Link href="/#Contact" onClick={() => { alert("For security purposes I disabled this feature. If you would like to receive my resume, you can contact me below. Have a nice day ;)") }} className="border border-warning rounded text-center">Resume</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}