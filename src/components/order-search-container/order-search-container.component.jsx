import React from 'react';

import './order-search-container.styles.scss';

import OrderOptions from '../order-options/order-options.component';
import SearchBox from '../search-box/search-box.component';
import {Sticky} from "semantic-ui-react";


const OrderSearchContainer = () => (
    <Sticky offset={80}>
        <div className='order-search-container'>
            <OrderOptions />
            <SearchBox />
        </div>
    </Sticky>
);

export default OrderSearchContainer;