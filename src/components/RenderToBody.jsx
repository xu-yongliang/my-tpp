import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class RenderToBody extends Component {

    componentDidMount() {
        this.pop = document.createElement('div');
        document.body.appendChild(this.pop);
        this.renderLayout();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.renderLayout();
    }

    componentWillUnmount() {
        this.unmountLayout();
    }

    render() {
        return <div/>;
    }

    renderLayout = () => {
        ReactDOM.render(
            this.props.children,
            this.pop
        );
    };

    unmountLayout = () => {
        if (!this.pop) {
            return;
        }
        ReactDOM.unmountComponentAtNode(this.pop);
        document.body.removeChild(this.pop);
        this.pop = null;
    }
}

export default RenderToBody;