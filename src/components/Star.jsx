import React from 'react';
import './Star.scss'

function Star({size, value}) {
    const bgSize = `${size}px`;
    return (
        <div className="star" style={{ height: size, width: size * 5, backgroundSize: bgSize }}>
            <div className="star__top" style={{ width: `${value * 10}%`, backgroundSize: bgSize }} />
        </div>
    );
}

export default Star;