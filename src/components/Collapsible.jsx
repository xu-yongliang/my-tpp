import React, {Component} from 'react';

import './Collapsible.scss'

class Collapsible extends Component {

    state = {
        isCollapse: false,
        isNeedCollapse: false,
        lineHeight: 0,
        fontSize: 0,
        height: 0
    };

    componentDidMount() {
        const textDom = this.refs[0];

        const showLine = parseInt(this.props.showHeight) || 3;
        const style = getComputedStyle(textDom, null);
        const lineHeight = parseInt(style.lineHeight);
        const cHeight = parseInt(style.height);
        const fontSize = parseInt(style.fontSize);

        if (lineHeight * showLine >= cHeight) {
            return;
        }
        this.setState({
            isNeedCollapse: true,
            isCollapse: true,
            fontSize,
            lineHeight: lineHeight + 'px',
            height: lineHeight * showLine,
        })
    }

    render() {
        const {
            isNeedCollapse, isCollapse, fontSize, lineHeight, height
        } = this.state;
        const overflowHidden = isNeedCollapse ? 'collapsible--hidden' : '';
        const maxHeight = isCollapse ? height + 'px' : 'none';
        return (
            <div className={`collapsible ${overflowHidden}`}
                 style={{maxHeight,}}
                 onClick={this.toggleStatus}
            >
                {React.Children.map(this.props.children, (element, idx) => {
                    return React.cloneElement(element, {ref: idx});
                })}
                {this.state.isNeedCollapse && isCollapse &&
                <div className="collapsible__expand"
                     style={{
                         fontSize,
                         lineHeight
                     }}>展开</div>}
            </div>
        );
    }

    toggleStatus = () => {
        if (this.state.isNeedCollapse) {
            this.setState((prevState) => ({
                isCollapse: !prevState.isCollapse
            }));
        }
    }
}

export default Collapsible;