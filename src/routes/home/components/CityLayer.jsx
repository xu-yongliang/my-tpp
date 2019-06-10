import React, {Component} from 'react';
import request from '../../../helpers/request';
import './CityLayer.scss'

class CityLayer extends Component {

    state = {
        hot: [],
        all: {}
    };

    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        const data = await request("/city");
        const {hot, all} = data;
        this.setState({
            hot,
            all
        })
    };

    render() {
        const {changeVisible, changeCity} = this.props;
        const alphabetKeys = Object.keys(this.state.all);
        // const alphabetKeys = [];
        return (
            <div className="cityLayer">
                <div className="cityLayer__head">
                    <div className="cityLayer__close" onClick={changeVisible}>关闭</div>
                    选择城市
                </div>

                <div className="cityLayer__content">
                    <div className="cityBlock">
                        <div id="location" className="cityBlock__title">定位城市</div>
                        <ul className="cityBlock__select">
                            <li className="cityBlock__item" onClick={() => changeCity("北京")}>北京</li>
                        </ul>
                    </div>
                    <div className="cityBlock">
                        <div id="hot" className="cityBlock__title">热门城市</div>
                        <ul className="cityBlock__select">
                            {
                                this.state.hot.map((ele) =>
                                    <li key={ele.id} onClick={() => changeCity(ele.regionName)}
                                        className="cityBlock__item">{ele.regionName}</li>
                                )
                            }
                        </ul>
                    </div>
                    {
                        alphabetKeys.map((label) => {
                            const cities = this.state.all[label];
                            return (
                                <div key={label} id={`label_${label}`} className="cityList">
                                    <div className="cityList__label">{label.toUpperCase()}</div>
                                    <ul className="cityList__wrapper">
                                        {
                                            cities.map((city) => (
                                                <li onClick={() => changeCity(city.regionName)}
                                                    key={city.id}
                                                    className="cityList__item">{city.regionName}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>

                <ul className="cityLayer__index cityIndex">
                    <li className="cityIndex__item">
                        <a href="#hot">定位</a>
                    </li>
                    <li className="cityIndex__item">
                        <a href="#location">热门</a>
                    </li>
                    {
                        alphabetKeys.map((label) => {
                            return (
                                <li key={label} className="cityIndex__item">
                                    <a href={`#label_${label}`}>{label}</a>
                                </li>
                            )
                        })
                    }
                </ul>

            </div>
        );
    }
}

export default CityLayer;