import { FaBars, FaTimes } from 'react-icons/fa'
import logo1 from '../../assets/logo_branco1.png'
import { Link } from 'react-scroll'
import React, { useState } from 'react';
import './Navbar.css'


export function Navbar() {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <Link to='home' className='logo'>
                    <img src={logo1} alt='logo1' />
                </Link>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to="home" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}> Home </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="sobre" spy={true} smooth={true} offset={100} duration={500} onClick={closeMenu}>Sobre</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="relatos" spy={true} smooth={true} offset={-80} duration={500} onClick={closeMenu}>Relatos</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="info" spy={true} smooth={true} offset={-200} duration={500} onClick={closeMenu}><i className="bi bi-plus"></i>Informações</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
};
