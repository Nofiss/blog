import React, { Component } from 'react';
import '../css/Post.css';

class Post extends Component {
    render() {
        return (
            <div className="post">
                <div className="title">{this.props.title}</div>
                <div className="bodyPost">{this.props.body}</div>
                <input type="text" placeholder="Commenti..." className="commenti" />
            </div>
        )
    }
}

export default Post;
