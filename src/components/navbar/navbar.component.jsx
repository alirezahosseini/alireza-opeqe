import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.styles.scss';
import CartSvg from '../svg-icon/cart-svg';


const Navbar = () => (

    <div className='options'>
            <Link className='option m-inv' to='/'>
                Reservation
            </Link>
            <Link className='option m-inv' to='/'>
                Orders
            </Link>
            <Link className='option m-inv' to='/'>
                Locations
            </Link>
            <Link className='option2' to='/'>
                <span className='log-in'>Log In</span>
            </Link>
            <Link className='option2 m-inv' to='/'>
                <span className='sign-up'>Sign Up</span>
            </Link>
            <Link className='cart' to="/">
                <span className='cart-container'>
                    <CartSvg /> 
                </span>
            </Link>
    </div>
);

export default Navbar;