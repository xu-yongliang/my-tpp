import React from 'react';

import './MovieItem.scss';

function MovieItem({data}) {
    return (
        <div className="moveItem">
            <div className="moveItem__poster">
                <img src={`//gw.alicdn.com/${data.poster}`} alt=""/>
            </div>
            <div className="moveItem__info movieInfo">
                <h3 className="movieInfo__title">{data.showName}</h3>
                <h4 className="movieInfo__score">观众评分 <span>{data.remark}</span></h4>
                <div className="movieInfo__director">导演：{data.director}</div>
                {data.leadingRole && <div className="movieInfo__actor">主演：{data.leadingRole}</div>}
                <div className="movieInfo__tag">
                    {
                        data.tags && data.tags.map((ele, idx) => {
                            if (idx % 2) {
                                return <span key={ele} className="gTag gTag--red">{ele}</span>
                            }
                            return <span key={ele} className="gTag gTag--blue">{ele}</span>
                        })
                    }
                </div>
            </div>
            <div className="moveItem__buy">
                <button className="gBtn">购票</button>
                <div className="moveItem__price">{Math.floor(Math.random() * 20)}块起</div>
            </div>
        </div>
    );
}

export default MovieItem;