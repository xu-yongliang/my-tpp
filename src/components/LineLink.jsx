import React from 'react';
import './LineLink.scss';


function LineLink({title, extra}) {
    return (
        <div className="lineLink">
            <div className="lineLink__title">{title}</div>
            <div className="lineLink__extra">{extra}</div>
            <i className="lineLink__arrow"/>
        </div>
    );
}

export default LineLink;