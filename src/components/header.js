import React from 'react'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'
export const Header = () => {
    const cart_val = useSelector(state => state.cart[0].total);
    console.log(cart_val);
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="valuebound.com">Bots WORLD</a>
                            <Link to="/Bots"><h5>DashBoard</h5></Link>
                <h4 style={{color:"white"}}>Cart {cart_val}</h4>
            </nav>
        </div>
    )
}


