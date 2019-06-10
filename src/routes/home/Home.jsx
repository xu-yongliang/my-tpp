import React, {Component} from 'react';

import './home.scss'
import TopBar from './components/TopBar'
import Slider from './components/Slider'
import MovieItem from './components/MovieItem'
import CityLayer from './components/CityLayer'
import TabBar from '../../components/TabBar'
import RenderToBody from '../../components/RenderToBody'
import request from '../../helpers/request';
import {Link} from 'react-router-dom';

class Home extends Component {

    state = {
        city: '',
        poster: [],
        movie: [],
        cityLayerVisible: false
    };

    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        const data = await request('/index');
        const {city, poster, movie} = data;

        this.setState({
            city,
            poster,
            movie
        });
    };

    render() {
        return (
            <div className="home">
                <div className="home__nav">
                    <TopBar city={this.state.city} selectCity={this.changeCityLayerVisible}/>
                </div>
                <div className="home__slider">
                    <div className="home__sliderWrap">
                        <Slider data={this.state.poster}/>
                    </div>
                </div>
                <ul className="home__content">
                    {this.state.movie.map((movie =>
                        <li key={movie.id} className="home__moveLi">
                            <Link to="/detail">
                                <MovieItem data={movie}/>
                            </Link>
                        </li>))}
                </ul>
                <TabBar active={'home'}/>
                {this.state.cityLayerVisible &&
                <RenderToBody> <CityLayer changeVisible={this.changeCityLayerVisible} changeCity={this.changeCity}/>
                </RenderToBody>}
            </div>
        );
    };

    changeCityLayerVisible = () => {
        this.setState({
            cityLayerVisible: !this.state.cityLayerVisible
        })
    };

    changeCity = (city) => {
        this.setState({
            city,
            cityLayerVisible: false
        })
    };
}

export default Home;