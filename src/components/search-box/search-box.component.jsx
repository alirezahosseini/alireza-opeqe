import React from 'react';
import {Link} from 'react-router-dom';

import './search-box.styles.scss';

import SearchSvg from '../svg-icon/search-svg';

const SearchBox = () => (
    <div className='search-box'>
            <div className='search'>
                <span className='v-line'></span>
                <span className='all-btn'>ALL</span>
                <input className='search-input' type="search" placeholder='Looking for something?'/>
                <Link className='search-btn' to="/">
                    <span className='search-container'>
                        <SearchSvg className='search-icon'/> 
                    </span>
            </Link>
            </div>
    </div>
);

export default SearchBox;