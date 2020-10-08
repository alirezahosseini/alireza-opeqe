import React from 'react';

import './footer.styles.scss';

import {Link} from 'react-router-dom';
import {Grid, Icon} from "semantic-ui-react";

import FoodImg from '../svg-icon/foods.png';


const Footer = () => (
    <div className='footer'>
        <div className='center'>
            <img className='image' src={FoodImg} alt='food' />
        </div>
        <div className='footer-nav'>
            <div className='options'>
                    <Link className='foption' to='/'>
                        About
                    </Link>
                    <Link className='foption' to='/'>
                        Services
                    </Link>
                    <Link className='foption' to='/'>
                        Support
                    </Link>
                    <Link className='foption' to='/'>
                        Gallery
                    </Link>
                    <Link className='foption' to='/'>
                        Terms
                    </Link>
                    <Link className='foption' to='/'>
                        Locations
                    </Link>
            </div>
        </div>

        <div className='footer-nav2'>
            <div className='nav2-preview'>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <ul>
                                <h1 className='title white'>Main Menu</h1>
                                <li>
                                    <p className='gray pointer'>Pickup</p>
                                </li>
                            </ul>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <ul>
                                <h1 className='white title'>Orders</h1>
                                <li>
                                    <p className='gray pointer'>Upcoming Orders</p>
                                </li>
                                <li>
                                    <p className='gray pointer'>Recent Orders</p>
                                </li>
                            </ul>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <ul>
                                <h1 className='white title'>Reservation</h1>
                                <li>
                                    <p className='gray pointer'>Recent Reservation</p>
                                </li>
                                <li>
                                    <p className='gray pointer'>Wait To Be Seated</p>
                                </li>
                            </ul>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <ul>
                                <h1 className='white title'>Profile</h1>
                                <li>
                                    <p className='gray pointer'>Promos & Credits</p>
                                </li>
                                <li>
                                    <p className='gray pointer'>Rewards</p>
                                </li>
                            </ul>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <ul>
                                <h1 className='white title'>Special Offers</h1>
                                <li>
                                    <p className='gray pointer'>Happy Hour (Egg Burger with Truffle Mayo)</p>
                                </li>
                                <li>
                                    <p className='gray pointer'>Happy Hour (California Chicken Salad)</p>
                                </li>
                                <li>
                                    <p className='gray pointer'>Happy Hour (Pad Thai)</p>
                                </li>
                                <li>
                                    <p className='gray pointer'>Happy Hour (Quarter Dark and Leg)</p>
                                </li>
                            </ul>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <ul>
                                <h1 className='white title'>Support</h1>
                                <li>
                                    <p className='gray pointer'>Contact Us</p>
                                </li>
                                <li>
                                    <p className='gray pointer'>Live Chat</p>
                                </li>
                            </ul>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </div>
    <Grid>
        <Grid.Row>
            <Grid.Column width={12}>
                <div className='footer-lastpart'>
                    <p className='gray-light'>Delight customers everywhere with a branded custom-built native iOS, native Android and Installable Website Application.</p>
                    <p className='gray' style={{marginTop:'-10px'}}>Opeqe is reliable, fast and commission free all-in-one ordering solutions for multi-location or single location restaurants.</p>
                    <p className='gray'>©2019 OPEQE INC | <span className='pointer'>Terms & Conditions</span> |  <span className='pointer'>Privacy Policy</span></p>
                </div>
            </Grid.Column>
            <Grid.Column width={4}>
                <div className={"social-network"}>
                    <ul>
                        <li>
                            <a href="">
                                <Icon name='instagram' size='large' />
                            </a>
                        </li>
                        <li>
                            <a href="">
                            <Icon name='twitter' size='large' />
                            </a>
                        </li>
                        <li>
                            <a href="">
                            <Icon name='facebook square' size='large'/>
                            </a>
                        </li>
                        <li>
                            <a href="">
                            <Icon name='youtube' size='large' />
                            </a>
                        </li>
                    </ul>
                </div>
            </Grid.Column>
        </Grid.Row>
    </Grid>
    </div>
);

export default Footer;