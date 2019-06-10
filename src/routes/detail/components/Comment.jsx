import React, {Component} from 'react';
import Star from '../../../components/Star'

import './Comment.scss'
import Collapsible from '../../../components/Collapsible'
import request from "../../../helpers/request";

class Comment extends Component {
    state = {
        comments: [],
        tabs: [],
        selectedCode: "HOT",
    };

    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        const data = await request('/commont');
        const {comments, tabs} = data;
        this.setState({
            comments,
            tabs
        })
    };

    changeTab = async (code) => {
        const data = await request(`/commont?code=${code}`);
        const {comments, tabs} = data;

        this.setState({
            comments,
            tabs,
            selectedCode: code,
        })
    };

    toggleFavour = id => {
        this.setState((prevState) => ({
            comments: prevState.comments.map(comment => {
                if (comment.id === id) {
                    return {
                        ...comment,
                        isFavor: comment.isFavor === "true" ? "false" : "true",
                        favorCount: comment.isFavor === "true" ? --comment.favorCount : ++comment.favorCount
                    };
                }

                return {...comment};
            })
        }));
    }

    render() {
        return (
            <div className="comment">
                <div className="comment__tags">
                    {
                        this.state.tabs.map((ele) => {
                            return (
                                <span onClick={() => this.changeTab(ele.code)}
                                      key={ele.code}
                                      className={`tag__item ${ele.code === this.state.selectedCode ? "tag__item--active" : ""}`}>{ele.name}</span>
                            )
                        })
                    }
                </div>
                <div className="comment__contextWrapper">
                    <ul className="comment__context">
                        {
                            this.state.comments.map((ele) => {
                                return (
                                    <li className="comment__item" key={ele.id}>
                                        <div className="comment__user">
                                            <div className="comment__userAvatar"
                                                 style={{backgroundImage: `url("//gw.alicdn.com/${ele.avatar}")`}}
                                            />
                                            <div className="comment__userInfo">
                                                <h3 className="comment__userName">{ele.nickName}</h3>
                                                <Star size={10} value={ele.remark}/> <span
                                                className="score">{ele.remark - 0.0}</span>
                                            </div>
                                        </div>
                                        <Collapsible>
                                            <p className="comment__userText">{ele.content}</p>
                                        </Collapsible>
                                        <div className="comment__userFoot">
                                            <span className="time">{this.getDate(ele.commentTime)}</span>
                                            <span><i
                                                onClick={() => this.toggleFavour(ele.id)}
                                                className={`like ${ele.isFavor === "true" ? "like--active" : ""}`}/>{ele.favorCount}</span>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }

    getDate(ts) {
        const date = new Date(+ts * 1000);
        return `${date.getMonth() + 1}-${date.getDay()} ${date.getHours()}:${date.getMinutes()}`;
    }
}

export default Comment;