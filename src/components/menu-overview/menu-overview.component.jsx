import React from 'react';

import './menu-overview.styles.scss';

import MenuPreview from '../menu-preview/menu-preview.component';
import MENU_DATA from '../../data/menu/menu-data';



/*const MenuOverview = () => (
    <div className='menu-overview'>
        <h3>menu-overview</h3>
        <MenuPreview />
    </div>
);*/

class MenuOverview extends React.Component {
	constructor() {
		super();
		
		this.state = {
			menuData: MENU_DATA
		};
	}

	render() {
		return(
			<div className='menu-overview'>
                {
                    this.state.menuData.map(({id, ...otherCollectionProps }) => (
                        <MenuPreview key={id} {...otherCollectionProps} />
                    ))
                }  
            </div>
		);
	}

}

export default MenuOverview;