import React, {Component} from 'react';
import './Detail.scss'
import request from '../../helpers/request';

import HeadPoster from './components/HeadPoster'
import MovieDesc from './components/MovieDesc'
import MovieScore from './components/MovieScore'
import Comment from './components/Comment'
import Artist from './components/Artist'
import MovieNews from './components/MovieNews'
import Collapsible from '../../components/Collapsible'
import LineLink from '../../components/LineLink';

class Detail extends Component {

    state = {
        dlTabStyle: {},
        blockHeight: 0,
        activeTab: '简介',
        tabActiveLeft: 0
    };

    dlTab = React.createRef();
    dlInfo = React.createRef();
    dlComment = React.createRef();
    dlMore = React.createRef();

    componentDidMount() {
        window.addEventListener('scroll', this.scrollHandler);
    }

    componentWillMount() {
        window.scrollTo(0, 0);
        this.getData();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollHandler);
    }

    getData = async () => {
        const data = await request('/detail');
        const {artistes} = data;
        this.setState({
            artistes
        })
    };

    scrollHandler = (e) => {
        const curScroll = document.documentElement.scrollTop + document.body.scrollTop;

        const baseWidth = window.innerWidth;
        if (curScroll < this.dlTab.current.offsetTop) {
            this.setState({
                dlTabStyle: {},
                blockHeight: '0',
                activeTab: '简介',
                tabActiveLeft: baseWidth / 6
            })
        } else if (curScroll < this.dlComment.current.offsetTop - 48) {
            this.setState({
                dlTabStyle: {
                    position: 'fixed',
                    top: '0',
                    left: '0'
                },
                blockHeight: '48px',
                activeTab: '简介',
                tabActiveLeft: baseWidth / 6
            })
        } else if (curScroll < this.dlMore.current.offsetTop - 48) {
            this.setState({
                dlTabStyle: {
                    position: 'fixed',
                    top: '0',
                    left: '0'
                },
                blockHeight: '48px',
                activeTab: '影评',
                tabActiveLeft: baseWidth / 2
            })
        } else {
            this.setState({
                dlTabStyle: {
                    position: 'fixed',
                    top: '0',
                    left: '0'
                },
                blockHeight: '48px',
                activeTab: '更多',
                tabActiveLeft: baseWidth / 6 * 5
            })
        }
    };

    navToBar = (ref) => {
        console.log(ref.current.offsetTop, ref.current.offsetTop - 48);
        window.scrollTo(0, ref.current.offsetTop - 48);
    };

    render() {
        return (
            <div className="detailLayer">
                <div className="detailLayer__poster">
                    <HeadPoster/>
                </div>
                <div className="detailLayer__desc">
                    <MovieDesc/>
                    <div className="detailLayer__movieScoreWrapper">
                        <MovieScore/>
                    </div>
                </div>
                <div className="margin-area"/>
                <div className="detailLayer__dlTabBlock" style={{height: this.state.blockHeight}} ref={this.dlTab}/>
                <div className="detailLayer__dlTab" style={this.state.dlTabStyle}>
                    <ul>
                        <li
                            className={`dlTab__item ${this.state.activeTab === "简介" ? "dlTab__item--active" : ""}`}
                            onClick={() => this.navToBar(this.dlInfo)}
                        >简介
                        </li>
                        <li
                            className={`dlTab__item ${this.state.activeTab === "影评" ? "dlTab__item--active" : ""}`}
                            onClick={() => this.navToBar(this.dlComment)}
                        >影评
                        </li>
                        <li
                            className={`dlTab__item ${this.state.activeTab === "更多" ? "dlTab__item--active" : ""}`}
                            onClick={() => this.navToBar(this.dlMore)}
                        >更多
                        </li>
                    </ul>
                    <div className="detailLayer__dlTab--active" style={{left: this.state.tabActiveLeft}}/>
                </div>
                <div className="detailLayer__module" ref={this.dlInfo}>
                    <Collapsible>
                        <div className="detailLayer__overview">
                            悍匪龙志强，在香港回归前，趁香港英政府不作为，而屡犯巨案，先后绑架富豪利家及雷家之长子，勒索超过二十亿元，事主怕被报复,
                            交赎款后都不敢报警。中国公安部极为关注，与香港警方合力，派香港警员何天卧底潜入龙志强犯罪团伙，发现他正策划绑架澳门富豪贺不凡，最终陆港警察合力勇擒龙志强，救出贺不凡。
                        </div>
                    </Collapsible>
                </div>
                <div className="detailLayer__module">
                    <div className="detailLayer__moduleTitle">演职人员</div>
                    <Artist artistes={this.state.artistes}/>
                </div>
                <div className="detailLayer__module" ref={this.dlComment}>
                    <div className="detailLayer__moduleTitle">观众热评</div>
                    <Comment/>
                </div>
                <div className="detailLayer__module" ref={this.dlMore}>
                    <div className="detailLayer__moduleTitle">电影动态</div>
                    <MovieNews/>
                </div>
                <div className="detailLayer__module">
                    <div className="detailLayer__moduleTitle">影片资料</div>
                    <ul className="detailLayer__more">
                        <li>
                            <LineLink title="幕后花絮"/>
                        </li>
                        <li>
                            <LineLink title="出品发行"/>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Detail;