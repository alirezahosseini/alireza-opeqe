import React from 'react';
import Homeheader from '../../images/HomeHeader.jpg';

import './home-slider.styles.scss';

const HomeSlider = () => (
    <div className='home-slider'>
        <img src={Homeheader} alt='home-slider' />
    </div>
);

export default HomeSlider;