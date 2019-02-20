import React, { Component } from 'react';

class Main extends Component {
  render() { 
    return (
      <main>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="post-preview">
                <a href="post.html">
                  <h2 className="post-title">
                    Un montón de Podcasts
                  </h2>
                  <h3 className="post-subtitle">
                    Parece hay un boom por los Podcasts en México
                  </h3>
                </a>
                <p className="post-meta">Posted by<a href="#"> admin</a> on Feb 20, 2019</p>
              </div>
              <hr />
              
            </div>
          </div>
        </div>
      </main>
    );
  }
}
 
export default Main