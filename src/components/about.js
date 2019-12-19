import React from "react";
import strapi from '../strapi';
import Reactmarkdown from 'react-markdown';
import Loader from './loader';
import Img from './img';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    async componentDidMount() {
        try {
            const data = await strapi.getEntries('abouts');
            this.setState({ data: data[0] });
        }
        catch (err) {
            alert(err);
        }
    }
    render = () => {
        return (<>{typeof this.state.data !== 'undefined' ? <><div id='blogpost'>
            <div className='title'>{this.state.data.title}</div>
            <div className='category'/>
            <Img class='blog-post-image' src={this.state.data.image.url} />
            <div className='body'>
                <Reactmarkdown source={this.state.data.body} />
            </div>
        </div></> : <Loader />}</>
        )
    }
}

export default About;