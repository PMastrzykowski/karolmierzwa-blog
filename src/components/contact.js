import React from 'react';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: '',
            body: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    sendEmail = (e) => {
        e.preventDefault();
        window.location.href = `mailto:karol.mierzwa@outlook.com?Subject=${this.state.subject}&body=${this.state.body}`;
    }
    render = () => {
        return (
            <>
            <div id='comments-section'>
                <div className='toggable-wrapper'>
                    <form>
                        <div className="floating-label-wrap">
                            <input type="text" onChange={this.handleChange} value={this.state.name} name='subject' className="floating-label-field floating-label-field--s3" id="field-1" placeholder=" " ref={(div) => this.name = div}/>
                            <label htmlFor="field-1" className="floating-label">Temat</label>
                        </div>
                        <div className="floating-label-wrap">
                            <textarea type="text" onChange={this.handleChange} value={this.state.body} name='body' className="floating-label-field floating-label-field--s3" id="field-3" placeholder=" " />
                            <label htmlFor="field-3" className="floating-label">Wiadomość</label>
                        </div>
                        <button onClick={this.sendEmail}>Wyślij</button>
                    </form>
                </div>
            </div>
            </>
        );
    }
}

export default Contact;
