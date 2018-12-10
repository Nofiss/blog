import React, { Component } from 'react';
import '../css/User.css'

class User extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [],
            city: ""
        }
        this.posts()
    }

    posts = () => {
        fetch("https://jsonplaceholder.typicode.com/users/" + this.props.id)
            .then((response) => {
                return response.json()
            })
            .then((res) => {
                this.setState({ users: res, city: res.address.city })
            })
    }

    render() {
        return (
            <div className="users">
                <div className="id">ID utente: {this.state.users.id}</div>
                <div className="name">Name: {this.state.users.name}</div>
                <div className="email">Email: {this.state.users.email}</div>
                <div className="username">Username: {this.state.users.username}</div>
                <div className="phone">Phone: {this.state.users.phone}</div>
                <div className="city">City: {this.state.city}</div>
            </div>
        )
    }
}

export default User;
