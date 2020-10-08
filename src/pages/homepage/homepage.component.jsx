import React from 'react';

import './homepage.styles.scss';

import HomeSlider from '../../components/home-slider/home-slider.component';
import OrderSearchContainer from '../../components/order-search-container/order-search-container.component';
import MenuOverview from '../../components/menu-overview/menu-overview.component';
import ReadyOrder from '../../components/ready-order/ready-order.component';


const HomePage = () => (
    <div className='homepage'>
        <HomeSlider />
        <OrderSearchContainer />
        <MenuOverview />
        <ReadyOrder />
    </div>
);

export default HomePage;