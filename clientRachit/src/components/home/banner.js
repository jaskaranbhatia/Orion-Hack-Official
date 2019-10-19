import React, { Component } from 'react'
import {Route,Link,BrowserRouter as Router} from 'react-router-dom';

class Banner extends Component {
    render() {
        return (
        <div>
        <section className="banner_part">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="banner_text">
                <div className="banner_text_iner">
                  <h1>AI Driven Health-Care By Your Personal Medic</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.</p>
                  <a href="#" className="btn_2 banner_btn_1">Disease Predictor</a>
                  <Link to="/register" className="btn_2 banner_btn_2">Register Now For Free</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="banner_img d-none d-lg-block">
                <img src="img/banner_img.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
        )
    }
}

export default Banner;