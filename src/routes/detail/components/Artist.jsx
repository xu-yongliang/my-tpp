import React from 'react';
import './Artist.scss'

function Artist({artistes}) {
    return (
        <div className="artist">
            <ul className="artist__list">
                {
                    artistes
                    && artistes.directors
                    && artistes.directors.map((director) => {
                        return (
                            <li className="artist__item" key={director.id}>
                                <div className="artist__img">
                                    <img src={`https://gw.alicdn.com/${director.avatar}`}
                                         alt=""/>
                                </div>
                                <div className="artist__name">{director.artisteName}</div>
                                <div className="artist__type">{director.profession}</div>
                            </li>
                        )
                    })
                }
                {
                    artistes
                    && artistes.actor
                    && artistes.actor.map((actor) => {
                        return (
                            <li className="artist__item" key={actor.id}>
                                <div className="artist__img">
                                    <img src={`https://gw.alicdn.com/${actor.avatar}`}
                                         alt=""/>
                                </div>
                                <div className="artist__name">{actor.artisteName}</div>
                                <div className="artist__type">{actor.profession}</div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default Artist;