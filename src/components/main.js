import React from 'react';
import { Link } from "react-router-dom"
import strapi from '../strapi';
import InfiniteScroll from 'react-infinite-scroller';
import { formatDate } from '../helpers';
import Img from './img';
import Loader from './loader';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogposts: [],
            blogposts_count: 0,
            limit: 4
        }
    }
    componentDidMount = async() => {
        try {
            const blogposts_count = await strapi.getEntryCount('blogposts')
            const blogposts = await strapi.getEntries('blogposts', {
                '_limit': this.state.limit,
                '_sort': 'date:DESC'
            })
            this.setState({ blogposts, blogposts_count });
        }
        catch (err) {
            alert(err);
        }
    }
    fetchPosts = async() => {
        try {
            const blogposts = await strapi.getEntries('blogposts', 
            {
                '_limit': this.state.limit, 
                '_start': this.state.blogposts.length,
                '_sort': 'date:DESC'
            })
            let state_posts = this.state.blogposts;
            let new_posts = state_posts.concat(blogposts);
            this.setState({ blogposts: new_posts});
        }
        catch (err) {
            alert(err);
        }
    }
    render = () => {
        return (<div id='blog' className='set-width'>
            {this.state.blogposts.length > 0 ? <InfiniteScroll
                pageStart={0}
                loadMore={this.fetchPosts}
                hasMore={this.state.blogposts.length !== this.state.blogposts_count}
                loader={<Loader />}
            >
                {this.state.blogposts.map((blogpost, index) => (
                    <Link key={blogpost.id} to={`/${blogpost.id}`}>
                        <div className={`blog-post ${index === 0 && 'new'}`}>
                            <Img class='blog-post-image' src={blogpost.image.url}/>
                            <div className='info-wrapper'>
                                <div className='category'>{blogpost.category}, <strong>{formatDate(blogpost.date)}</strong></div>
                                <div className='title'>{blogpost.title}</div>
                            </div>
                        </div>
                    </Link>
                ))}
            </InfiniteScroll> : <Loader />}
        </div>)
    }
}

export default Main;