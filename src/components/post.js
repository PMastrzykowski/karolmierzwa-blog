import React from 'react';
import strapi from '../strapi';
import Reactmarkdown from 'react-markdown';
import { withRouter } from "react-router";
import { formatDate } from '../helpers';
import CommentsSection from './comments-section';
import Loader from './loader';
import Img from './img';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    async componentDidMount() {
        try {
            const data = await strapi.getEntries('blogposts', { url: this.props.match.params.id });
            if (data.length > 0) {
                this.setState({ data: data[0] });
            } else {
                this.props.history.push("/")
            }
        }
        catch (err) {
        }
    }
    render = () => {
        return (<>{typeof this.state.data !== 'undefined' ? <><div id='blogpost'>
            <div className='title'>{this.state.data.title}</div>
            <div className='category'>{this.state.data.category}, <strong>{formatDate(this.state.data.date)}</strong></div>
            <Img class='blog-post-image' src={this.state.data.image.url} />
            <div className='body'>
                <Reactmarkdown source={this.state.data.body} />
            </div>
        </div>
            <CommentsSection
                comments={this.state.data.comments}
                id={this.state.data.id}
            /></> : <Loader />}</>
        )
    }
}

export default withRouter(Post);