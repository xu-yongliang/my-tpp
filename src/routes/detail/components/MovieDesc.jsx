import React from 'react';
import './MovieDesc.scss'
import Collapsible from '../../../components/Collapsible'

function MovieDesc(props) {
    return (
        <div className="movieDesc">
            <div className="movieDesc__poster">
                <img src="https://gw.alicdn.com/i3/TB1ebtnTrvpK1RjSZPiXXbmwXXa_.jpg_400x400Q30.jpg" alt=""/>
            </div>
            <div className="movieDesc__content">
                <p className="movieDesc__title">追龙Ⅱ</p>
                <p className="movieDesc__subTitle">追龍2：贼王</p>
                <div className="movieDesc__detail">
                    <p>剧情 / 动作 / 犯罪 / 中国大陆,中国香港 / 103分钟</p>
                    <p>2019-06-06 中国大陆上映 </p>
                    <p><span className="want">21.5万人想看</span> / ⼤V推荐度 56% <i className="weibo-icon"/></p>
                </div>
            </div>
        </div>
    );
}

export default MovieDesc;