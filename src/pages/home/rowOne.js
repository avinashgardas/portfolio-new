import React, { Component } from "react";

export default class RowOne extends Component {
  render() {
    return (
      <div className="row-fluid-wrapper row-depth-1 row-number-1 home-row-0-force-full-width-section dnd-section home-row-0-padding">
        <div className="row-fluid">
          <div
            className="span12 widget-span widget-type-custom_widget dnd-module"
            data-widget-type="custom_widget"
            data-x="0"
            data-w="12"
          >
            <div
              id="hs_cos_wrapper_home-module-1"
              className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module"
              data-hs-cos-general-type="widget"
              data-hs-cos-type="module"
            >
              <section
                id="section-header-home-module-1"
                className="custom-row-section custom-header-section full-height centered"
              >
                <div className="content-wrapper" style={{
                      display: `inline-grid`,
                      justifyItems: `center`
                }}>
                  <div className="custom-row-wrapper">
                    <div className="custom-row none style-1 is-align-center">
                      <div className="custom-col primary-col">
                        <div className="custom-col-section-text">
                          <h1>
                          Hello 👋 I'm <span style={{ color: "#0250ef" }}>
                              Avinash Gardas
                            </span> - passionate web designer and developer based in Ottawa, Canada.
                          </h1>
                          <p>
                            This portfolio has a brief details of the projects that I worked on.
                          </p>
                          <div className="button-container">
                            <a
                              href="#about"
                              target="_self"
                              className="btn btn-primary"
                              title="Start now"
                              data-scroll-to=""
                            >
                              Explore
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* <div className="custom-col secondary-col"></div>
                      <div className="custom-col mobile-image-col">
                        <img
                          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTg1MDQyMA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
                          alt="Webisoft Home"
                          style={{
                            width: 300, height: 277,
                            maxWidth: `100%`,
                            height: `auto`,
                          }}
                        />
                      </div> */}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
