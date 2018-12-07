import React, { Component } from 'react';

class User extends Component {
constructor(props) {
    super(props)
}
    posts = () => {
        fetch("https://jsonplaceholder.typicode.com/posts" + this.props.id)
            .then((response) => {
                return response.json()
            })
            .then((res) => {
                this.setState({ users: res })
            })
    }

    render() {
        return (
            <div className="user">{this.props.name}</div>
        )
    }
}

export default User;