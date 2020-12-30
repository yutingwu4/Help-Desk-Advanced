/**
 * @name Login
 * @desc Displays login screen
 */

import React, { Component } from 'react';

export default class Login extends Component {
  constructor() {
    super();

    // Initial state (empty strings) for the form's input fields.
    this.state = {
      username: '',
      password: '',
      match: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // OnChange event handler that will update state whenever a key is pressed in an input field.
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  //OnSubmit event handler on the form that will do a POST request to MongoDB with the current state as the request body.
  async onSubmit(e) {
    e.preventDefault();
    const newLogin = { username, password } = this.state;
    //const history = this.props;

    try {

      //query database to find if user exists
      //if so, does username match password?
      //if so, redirect
      //if not, reload this page
      await axios.get('/api/newLogin', body, {
        headers: { 'content-type': 'application/json' },
      });
      await this.setState({
        username: '',
        password: ''
      });

    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div className="row justify-content-center mt-5">
        <div className="col-6">
          <form onSubmit={this.onSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
            <label>
              USERNAME:
              <input
                className="form-control"
                onChange={this.onChange}
                type="text"
                name="username"
                value={this.state.username}
                required
              />
            </label>
            <label>
              PASSWORD:
              <input
                className="form-control"
                style={{ width: '100%' }}
                onChange={this.onChange}
                type="password"
                name="password"
                value={this.state.password}
                required
              />
            </label>
            <br/>
            <button className="btn btn-success" type="submit">
              LOGIN
            </button>
              <br/>
              <p style={{textAlign: 'center'}}>OR</p>

            <button className="btn btn-success" type="submit">
            CREATE ACCOUNT
          </button>
          </form>
        </div>
      </div>
    );
  }
}
