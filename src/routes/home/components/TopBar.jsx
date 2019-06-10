import React from 'react';
import './TopBar.scss'

function TopBar({city}) {
    return (
        <div className={'topBar'}>
            <div className="topBar__city">{city}</div>
            <div className="topBar__search">
                <input placeholder={'搜影片、影院、影人'} type="text" className="topBar__searchInput"/>
            </div>
            <div className="topBar__scan"></div>
        </div>
    );
}

export default TopBar;