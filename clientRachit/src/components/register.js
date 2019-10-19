import React, { Component } from 'react';

class register extends Component {
    render() {
        return (
          <section className="breadcrumb breadcrumb_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb_iner text-center">
                <div className="breadcrumb_iner_item">
                  <h2>Register</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
        <form>
        <div className="form-group">
        <label htmlFor="exampleInputEmail1"><h2><font color="white">Username</font></h2></label>
        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username" />
        <small id="emailHelp" className="form-text text-muted"><h6>Your username is unique to you</h6></small>
      </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1"><h2><font color="white">Email Address</font></h2></label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted"><h6>We'll never share your email with anyone else.</h6></small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1"><h2><font color="white">Password</font></h2></label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
      </section>
          );
    }
}

export default register;
