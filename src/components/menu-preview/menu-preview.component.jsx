import React from 'react';

import Carousel from 'react-elastic-carousel';

import './menu-preview.styles.scss';

import MenuItem from '../menu-item/menu-item.component';

const MenuPreview = ({title, items}) => (
    <div className='menu-preview'>
        <h2 className='title'>{title}</h2>
        <div className='preview'>
            <Carousel className='visible1' itemsToShow={3} itemsToScroll={3} pagination={false} >
                {items.map((item) => (
                <MenuItem key={item.id} item={item} />
                ))}
            </Carousel>
            <Carousel className='visible2' itemsToShow={2} itemsToScroll={2} pagination={false} >
                {items.map((item) => (
                <MenuItem key={item.id} item={item} />
                ))}
            </Carousel>
            <Carousel className='visible3' itemsToShow={1} itemsToScroll={1} pagination={false} >
                {items.map((item) => (
                <MenuItem key={item.id} item={item} />
                ))}
            </Carousel>
        </div>
    </div>
);

export default MenuPreview;