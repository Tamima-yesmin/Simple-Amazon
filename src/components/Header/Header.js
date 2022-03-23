import React from 'react'
import logo from '../../images/Logo.svg'
import './header.css'

export default function Header() {
    return (
        <div>
            <nav className="header">
                <img src={logo} alt="" />
                <div>
                    <a href="">Home</a>
                    <a href="">Orders</a>
                    <a href="">About</a>
                    <a href="">Inventory</a>
                </div>
            </nav>
        </div>
    )
}
