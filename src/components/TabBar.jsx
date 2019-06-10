import React from 'react';
import { Link } from 'react-router-dom';
import './TabBar.scss'

function TabBar({active}) {
    return (
        <div className="tabBar">
            <Link to="/" className={`tabBar__btn ${active==="home" && "tabBar__btn--active"}`} >
                <i className="tabBar__icon tabBar__icon--movie"></i>
                <span className="tabBar__text">电影</span>
            </Link>
            <Link to="/my" className={`tabBar__btn ${active==="my" && "tabBar__btn--active"}`}>
                <i className="tabBar__icon tabBar__icon--my"></i>
                <span className="tabBar__text">我的</span>
            </Link>
        </div>
    );
}

export default TabBar;