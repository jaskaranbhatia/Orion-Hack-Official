import React, { Component } from 'react'

export class Features extends Component {
  render() {
    return (
      <section className="feature_part padding_top">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-6 ">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-sm-6">
                    <div className="single_feature">
                      <div className="single_feature_part">
                        <img src="img/icon/feature_icon_1.png" alt="" />
                        <h4>A Volunteer</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="single_feature">
                      <div className="single_feature_part">
                        <img src="img/icon/feature_icon_2.png" alt="" />
                        <h4>A Volunteer</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor</p>
                      </div>
                    </div>
                    <div className="single_feature">
                      <div className="single_feature_part single_feature_part_2">
                        <img src="img/icon/feature_icon_3.png" alt="" />
                        <h4>A Volunteer</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="feature_part_text">
                  <h2>featured</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                    ultrices gravida Risus com odo viverra maecenas accumsan lacus vel facilisis
                    accumsan.</p>
                  <div className="row">
                    <div className="col-sm-6 col-md-4 col-lg-5">
                      <div className="feature_part_text_iner">
                        <h4>50k</h4>
                        <p>Total Volunteer</p>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-5">
                      <div className="feature_part_text_iner">
                        <h4>100k</h4>
                        <p>Successed Mission</p>
                      </div>
                    </div>
                  </div>
                  <a href="#" className="btn_4">learn more <img src="img/icon/right-arrow.svg" alt="" /></a>
                </div>
              </div>
            </div>
          </div>
          <img src="img/animate_icon/Shape-1.png" alt="" className="feature_icon_1" />
          <img src="img/animate_icon/Shape-14.png" alt="" className="feature_icon_2" />
          <img src="img/animate_icon/Shape.png" alt="" className="feature_icon_3" />
          <img src="img/animate_icon/shape-3.png" alt="" className="feature_icon_4" />
        </section>
    )
  }
}

export default Features;