import React, { Component } from "react";
import axios from 'axios';

export default class Signin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
      }

    // componentDidMount() {
    //     axios.post(`https://localhost:3000/user/login`, {email: email, password: password})
    //         .then(res => {
    //         console.log(res.body);
    //     })
    // }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    
    onSubmit = (e) => {
        e.preventDefault();

        const {email, password} = this.state

        

    axios.post('http://localhost:3000/user/login', {email, password})
      .then(res => {
          console.log(res.data)
          console.log(res.data.token);
        });
    }

    render() {
        const {email, password} = this.state
        return (
            <form onSubmit={this.onSubmit}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input name='email' className="form-control" placeholder="Enter email" value={email} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name='password' className="form-control" placeholder="Enter password" value={password} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <br/>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <br/>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }
}