import React from 'react';

import './MovieNews.scss'

function MovieNews(props) {
    return (
        <div className="moveNews">
            <ul className="moveNews__list">
                <li className="newsInfo">
                    <div className="newsInfo__base">
                        <div className="newsInfo__title">端午档警匪大片《追龙II》正在热映，古天乐演绎史上“最失败”卧底端午档警匪大片《追龙II》正在热映，古天乐演绎史上“最失败”卧底</div>
                        <div className="newsInfo__sub">
                            <span className="read">阅读 8749</span>
                            <span className="date">6-8 1:46</span>
                        </div>
                    </div>
                    <div className="newsInfo__poster">
                        <img src="//img-dt.alicdn.com/178159/1560025752889.jpg?x-oss-process=image/resize,w_790" alt=""/>
                    </div>
                </li>
                <li className="newsInfo">
                    <div className="newsInfo__base">
                        <div className="newsInfo__title">《追龙II》好评率回升  “豪哥”赵燕国彰现身力挺</div>
                        <div className="newsInfo__sub">
                            <span className="read">阅读 35</span>
                            <span className="date">6-9 22:31</span>
                        </div>
                    </div>
                    <div className="newsInfo__poster">
                        <img src="//gw.alicdn.com/i4/TB1DjWkcoGF3KVjSZFmXXbqPXXa_.jpg_640x640Q30.jpg" alt=""/>
                    </div>
                </li>
                <li className="newsInfo">
                    <div className="newsInfo__base">
                        <div className="newsInfo__title">《追龙II》幕后制作特辑曝光   血脉喷张彰显“悍匪”本性</div>
                        <div className="newsInfo__sub">
                            <span className="read">阅读 4196</span>
                            <span className="date">6-9 4:32</span>
                        </div>
                    </div>
                    <div className="newsInfo__poster">
                        <img src="//gw.alicdn.com/i1/TB1GIy2b81D3KVjSZFyXXbuFpXa_.jpg_640x640Q30.jpg" alt=""/>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default MovieNews;