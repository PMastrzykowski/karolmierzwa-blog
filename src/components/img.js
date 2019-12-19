import React from 'react';

class Img extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            src: this.props.src || '',
            style: this.props.style || {},
            class: this.props.class || ''
        }
    }
    render = () => {
        return (<div className={'image-component ' + this.state.class}>
            <img src={'https://karolmierzwa-blog-cms.herokuapp.com' + this.state.src} alt=''/>
        </div>)
    }
}

export default Img;