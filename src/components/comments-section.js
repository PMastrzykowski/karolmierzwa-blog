import React from 'react';
import Gravatar from 'react-gravatar';
import { formatDate } from '../helpers';
import strapi from '../strapi';

class CommentsSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            body: '',
            comments: this.props.comments || [],
            isEditorOpen: false
        }
    }
    openEditor = () => {
        this.setState((state, props) => ({ isEditorOpen: !state.isEditorOpen}), () => {this.name.focus()});
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitComment = (e) => {
        e.preventDefault();
        let data = {
            name: this.state.name,
            email: this.state.email,
            body: this.state.body,
            date: new Date().toISOString()
        }
        let allComments = this.state.comments;
        allComments.unshift(data);
        this.setState({
            name: '',
            email: '',
            body: '',
            comments: allComments,
            isEditorOpen: false
        }, () => this.addComment())
    }
    addComment = async() => {
        try {
            await strapi.updateEntry('blogposts', this.props.id, {comments: this.state.comments})
        }
        catch (err) {
            alert(err);
        }
    }
    render = () => {
        return (
            <>
            <div
                id='comments-section'
                onClick={!this.state.isEditorOpen ? this.openEditor: null}
            >
                <div className='toggable-wrapper' style={this.state.isEditorOpen? {height: 0, opacity: 0} : {height: '58px', opacity: 1}}>
                    <div className='new-comment-button'>Napisz komentarz...</div>
                </div>
                <div className='toggable-wrapper' style={this.state.isEditorOpen? {height: '415px', opacity: 1} : {height: 0, opacity: 0}}>
                    <form>
                        <div className="floating-label-wrap">
                            <input type="text" onChange={this.handleChange} value={this.state.name} name='name' className="floating-label-field floating-label-field--s3" id="field-1" placeholder=" " ref={(div) => this.name = div}/>
                            <label htmlFor="field-1" className="floating-label">Imię</label>
                        </div>
                        <div className="floating-label-wrap">
                            <input type="email" onChange={this.handleChange} value={this.state.email} name='email' className="floating-label-field floating-label-field--s3" id="field-2" placeholder=" " />
                            <label htmlFor="field-2" className="floating-label">Email</label>
                        </div>
                        <div className="floating-label-wrap">
                            <textarea type="text" onChange={this.handleChange} value={this.state.body} name='body' className="floating-label-field floating-label-field--s3" id="field-3" placeholder=" " />
                            <label htmlFor="field-3" className="floating-label">Komentarz</label>
                        </div>
                        <button onClick={this.submitComment}>Opublikuj</button>
                    </form>
                </div>
            </div>
            {this.state.comments.map((comment, index) => 
            <div key={'comment-' + index} className='single-comment'>
                <div className='avatar'>
                <Gravatar email={comment.email} size={100}/>
                </div>
                <div className='content'>
                <div className='name'>{comment.name}</div>
                <div className='date'>{formatDate(comment.date)}</div>
                <div className='body'>{comment.body}</div>
                </div>
            </div>
            )}
            </>
        );
    }
}

export default CommentsSection;
