import React from 'react'
import './Footer.css'
import { Link } from 'react-scroll'

export function Footer () {
    return (
        <div className='footer'>
            <div className='container'>
                <ul>
                    <li >
                    <Link to="home" spy={true} smooth={true} offset={-100} duration={500}><i class="bi bi-house-up"></i> Home </Link>
                    </li>
                    <li >
                    <a className='instagram' href="https://www.instagram.com/jessicalaine.nutri/" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i> Instagram </a>
                    </li>
                    <li >
                    <a className='whatsapp' href="https://api.whatsapp.com/send?phone=5517997590771&text=Ol%C3%A1%2C+estou+precisando+de+uma+nutri%21+%F0%9F%92%9A" target="_blank" rel="noreferrer"><i className="bi bi-whatsapp"></i> Whatsapp </a>
                    </li>
                </ul>
                <div className='bottom'>
                    <span className='line'></span>
                    <p>2023 Execute, Inc. All rights reserved</p>
                </div>
            </div>
        </div>
    )
};
