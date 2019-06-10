import React from 'react';
import './MovieScore.scss'
import Star from '../../../components/Star'

function MovieScore(props) {
    return (
        <div className="movieScore">
            <div className="movieScore__info">
                <div className="movieScore__score">
                    <span className="score">7.6</span>
                    <Star size={15} value={7.6} />
                </div>
                <div className="movieScore__remark">
                    淘票票评分<span className="sum">2.2万人评</span>
                </div>
            </div>
            <div className="movieScore__distribution distribution">
                <div className="distribution__item">
                    <Star size={9} value={10} />
                    <div className="distribution__btm">
                        <div className="distribution__top" style={{ width: '90%' }} />
                    </div>
                </div>
                <div className="distribution__item">
                    <Star size={9} value={8} />
                    <div className="distribution__btm">
                        <div className="distribution__top" style={{ width: '30%' }} />
                    </div>
                </div>
                <div className="distribution__item">
                    <Star size={9} value={6} />
                    <div className="distribution__btm">
                        <div className="distribution__top" style={{ width: '2%' }} />
                    </div>
                </div>
                <div className="distribution__item">
                    <Star size={9} value={4} />
                    <div className="distribution__btm">
                        <div className="distribution__top" style={{ width: '1%' }} />
                    </div>
                </div>
                <div className="distribution__item">
                    <Star size={9} value={2} />
                    <div className="distribution__btm">
                        <div className="distribution__top" style={{ width: '0%' }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieScore;