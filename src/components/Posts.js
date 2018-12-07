import React, { Component } from 'react';
import Post from './Post.js';

class Posts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
        this.posts()
    }

    posts = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                return response.json()
            })
            .then((res) => {
                this.setState({ posts: res })
            })
    }

    render() {
        return (
            <div className="posts">
                {this.state.posts.map((post) => {
                    return (
                        <div key={post.id}>
                            <Post userId={post.userId} title={post.title} body={post.body} />
                        </div>
                    )
                })
                }
            </div>
        )
    }
}

export default Posts;
