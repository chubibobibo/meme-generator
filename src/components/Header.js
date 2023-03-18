import React from 'react';
import Nav from 'react-bootstrap/Nav'

function Header() {
    return (
        <div className='header'>
            <Nav className='header-nav'>
                <img className='header-img' src="../images/Troll-Face.png" alt="" />
                <h1>Meme Generator</h1>
            </Nav>
        </div>
    )
}

export default Header