import React from 'react';
import './HeadPoster.scss'

function HeadPoster(props) {
    return (
        <div className="headPoster">
            <div className="tNav">
                <div className="tNav__icon tNav__icon--back" onClick={() => { window.history.back(); }} />
                <div className="tNav__icon tNav__icon--share" />
            </div>
        </div>
    );
}

export default HeadPoster;