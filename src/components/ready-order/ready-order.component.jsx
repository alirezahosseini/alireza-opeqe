import React from 'react';

import './ready-order.styles.scss';

import OrderOptions from '../order-options/order-options.component';


const ReadyOrder = () => (
    <div className='ready-order'>
        <h2 className='title'>Ready to order?</h2>
        <p className='text'>Browse our menu for dine-in, delivery or pickup and catering</p>

        <div className='ooContainer'>
            <OrderOptions />
        </div>
    </div>
);

export default ReadyOrder;