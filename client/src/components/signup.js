import React, { Component } from "react";
import axios from 'axios';

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
      }

      onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();

        const {email, password} = this.state

        

    axios.post('http://localhost:3000/user/signup', {email, password})
      .then(res => { 
          console.log('user created')
        });
    }

    render() {
        const {email, password} = this.state
        return (
            <form onSubmit={this.onSubmit}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={this.onChange} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={this.onChange} />
                </div>
                <br/>
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <br/>
                <br/>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        );
    }
}