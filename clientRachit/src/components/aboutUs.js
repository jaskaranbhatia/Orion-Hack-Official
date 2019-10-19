var NewComponent = React.createClass({
    render: function() {
      return (
  
        <section className="about_us section_padding">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-6 col-lg-5">
                <div className="about_us_text">
                  <h2>Right people at the
                    Right time.</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim</p>
                  <a href="#" className="btn_1">get started</a>
                  <a href="#" className="btn_2">sing up free</a>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="learning_img">
                  <img src="img/about_img.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <img src="img/left_sharp.png" alt="" className="left_shape_1" />
          <img src="img/about_shape.png" alt="" className="about_shape_1" />
          <img src="img/animate_icon/Shape-16.png" alt="" className="feature_icon_1" />
          <img src="img/animate_icon/Shape-1.png" alt="" className="feature_icon_4" />
        </section>
      );
    }
  });