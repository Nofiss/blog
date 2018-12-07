import React, { Component } from 'react';
import '../css/Post.css';

class Post extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }

    posts = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                return response.json()
            })
            .then((res) => {
                this.setState({ users: res })
            })
    }

    render() {
        return (
            <div className="post">
                {this.state.users.map((user) => {
                    return(
                    this.props.userId === user.id ? console.log("CIAO") : console.log("NO")
                )})
                }
                <div className="title">{this.props.title}</div>
                <div className="bodyPost">{this.props.body}</div>
                <input type="text" placeholder="Commenti..." className="commenti" />
            </div>
        )
    }
}

export default Post;
