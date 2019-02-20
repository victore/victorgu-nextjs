import React, { Component } from 'react';
import Head from 'next/head'
import Link from 'next/link'

class Header extends Component {
  render() { 
    return (
      <div>
        <Head>
          <title>Víctor Gu</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
          <div className="container">
            <a className="navbar-brand" href="/">/home/</a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link href="/about">
                    <a className="nav-link">About</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/about">
                    <a className="nav-link">Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <header className="masthead" style={{ backgroundImage: "url('../static/img/home-bg.jpg'"}}>
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                  <h1>Víctor Gu</h1>
                  <span className="subheading">Escribo que escribo</span>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header
