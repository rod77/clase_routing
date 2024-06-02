import React from 'react'
import './NavBar.css'
import { CartWidget } from '../CartWidget/CartWidget'

export const NavBar = () => {
    return (
        <>
            <nav className={`container`}>
                <div className="navbar">
                    <div className="navbar_logo">🔴 Ecommerce</div>
                    <ul className="navbar_links">
                        <li className="navbar_link">Remeras</li>
                        <li className="navbar_link">Pantalones</li>
                        <li className="navbar_link">Zapatillas</li>
                    </ul>
                    <div className="navbar_others">
                        <CartWidget />
                    </div>
                </div>
            </nav>
        </>
    )
}
