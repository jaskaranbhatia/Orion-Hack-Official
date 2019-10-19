import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <header className="main_menu home_menu">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <a className="navbar-brand" href="index.html"> <img src="img/logo.png" alt="logo" /> </a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="menu_icon"><i className="fas fa-bars" /></span>
                  </button>
                  <div className="collapse navbar-collapse main-menu-item" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a className="nav-link" href="index.html">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="feature.html">feature</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="pricing.html">pricing</a>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Blog
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a className="dropdown-item" href="blog.html"> blog</a>
                          <a className="dropdown-item" href="single-blog.html">Single blog</a>
                        </div>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          pages
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
                          <a className="dropdown-item" href="elements.html">Elements</a>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </div>
                  <a id="search_1" href="javascript:void(0)"><i className="ti-search" /></a>
                  <div className="dropdown cart">
                    <a className="dropdown-toggle" href="#" id="navbarDropdown3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fas fa-cart-plus" />
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                  <div className="single_product">
  
                                  </div>
                              </div> 
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </header>
        )
    }
}

export default Header;