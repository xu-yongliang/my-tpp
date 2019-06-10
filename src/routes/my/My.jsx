import React, {Component} from 'react';
import LineLink from '../../components/LineLink';
import TabBar from '../../components/TabBar';

import './my.scss'

class My extends Component {
    render() {
        return (
            <div className="my">
                <div className="my__top">
                    <div className="tNav">
                        <div className="tNav__icon tNav__icon--setting"></div>
                        <div className="tNav__icon tNav__icon--message"></div>
                    </div>
                    <div className="my__info">
                        <div className="my__avatar" style={{backgroundImage: 'url(/source/avatar.png)'}}/>
                        <div className="my__detail">
                            <h3 className="my__name">sunshiner地方</h3>
                            <p className="my__status">
                                <span className="my__focus">关注 0</span>
                                <span className="my__fans">被关注 0</span>
                            </p>
                            <p className="my__level">
                                <span>
                                黑钻会员
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <ul className="my__content">
                    <li>
                        <a href="#">
                            <LineLink title="收藏的电影" extra="20" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <LineLink title="看过的电影" extra="20" />
                        </a>
                    </li>
                </ul>
                <TabBar active="my" />
            </div>
        );
    }
}

export default My;