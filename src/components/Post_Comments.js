import React, { Component } from 'react';
import Post from './Post.js';
import '../css/Post_Comments.css';

class Post_Comments extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            comments: []
        }
        this.posts()
        this.comments()
    }

    posts = () => {
        fetch("https://jsonplaceholder.typicode.com/posts/" + this.props.match.params.id)
            .then((response) => {
                return response.json()
            })
            .then((res) => {
                this.setState({ posts: res })
            })
    }

    comments = () => {
        fetch("https://jsonplaceholder.typicode.com/posts/" + this.props.match.params.id + "/comments")
            .then((response) => {
                return response.json()
            })
            .then((res) => {
                this.setState({ comments: res })
            })
    }

    render() {
        return (
            <div>
                <div className="posts">
                    <div key={this.state.posts.id}>
                        <Post userId={this.state.posts.userId} title={this.state.posts.title} body={this.state.posts.body} />
                    </div>
                </div>
                <div className="comments">
                    {this.state.comments.map(item => {
                        return (
                            <ul className="comment" key={item.id}>
                                <li className="commentEmail">{item.email}</li>
                                <div className="commentName">{item.name}</div>
                                <div className="commentBody">{item.body}</div>
                            </ul>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Post_Comments;