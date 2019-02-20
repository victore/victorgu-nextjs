import React, { Component } from 'react';
import Head from 'next/head'
import "../static/styles/main.scss";

class Home extends Component {
  render() { 
    return (
      <div>
        <Head>
          <title>Victor Gu</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <header>
          <nav class="navbar navbar-light bg-light">
            <span class="navbar-brand mb-0 h1">> /home/victorgu</span>
          </nav>
        </header>
        <main>
          <div className="container">
            <h1 className="">VictorGu on NextJS</h1>
            {/* <img src="/static/big-whips.jpg" alt="big-whips" /> */}
          </div>
        </main>
        <footer>
          <ul class="social">
            <li>
              <a href="https://github.com/victore" title="Github" target="_blank">
                <i class="icon icon-github"></i> Github
              </a>
            </li>
            <li><a href="https://www.linkedin.com/in/victorgu/" title="LinkedIn" target="_blank"><i class="icon icon-linkin"> LinkedIn</i></a></li>
            <li><a href="https://www.twitter.com/vctrgu" title="Twitter" target="_blank"><i class="icon icon-twitter"></i> Twitter</a></li></ul>
        </footer>
      </div>
    );
  }
}
 
export default Home;