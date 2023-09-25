import React, { Component } from "react";
import ProjectOne from "./projectOne";
import ProjectTwo from "./projectTwo";
import ProjectThree from "./projectThree";
import ProjectFour from "./projectFour";

export default class RowThree extends Component {

  render() {
    return (
      <>
        <div
          className="row-fluid-wrapper row-depth-1 row-number-5 home-row-4-padding dnd-section home-row-4-force-full-width-section"
          style={{ backgroundColor: `#ebebeb` }}
        >
          <div className="row-fluid">
            <div
              className="span12 widget-span widget-type-custom_widget dnd-module"
              data-widget-type="custom_widget"
              data-x="0"
              data-w="12"
            >
              <div
                id="hs_cos_wrapper_home-module-5"
                className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module"
                data-hs-cos-general-type="widget"
                data-hs-cos-type="module"
              >
                <section
                  id="section-home-module-5"
                  className="custom-row-section scroll-effect"
                >
                  <div className="content-wrapper">
                    <div id="" className="custom-row-wrapper bordered">
                      <div className="custom-row reversed none right style-1">
                        <div
                          className="custom-col primary-col"
                          data-scroll=""
                          data-scroll-class="appear"
                          data-scroll-repeat="true"
                        >
                          <div className="custom-col-section-text">
                            <h2>
                              I've built some incredible projects in the past
                              few years!
                            </h2>
                            <p>
                              Being a front-end web developer, I'm passionate about designing and building elegant web applications that help solve day-to-day problems. I'm also an React Native mobile-app developer enthusiast.
                            </p>
                            <p>
                              From basic websites, WordPress blogs to much complex web applications built using ReactJs, Angular with real-time databases and servers.
                            </p>
                            <p>Some of my projects are listed below:</p>
                          </div>
                        </div>
                        <div
                          className="custom-col secondary-col"
                          data-scroll=""
                          data-scroll-class="appear"
                          data-scroll-repeat="true"
                        >
                          <div className="section-heading-wrapper">
                            <span
                              className="section-heading sm"
                              style={{ alignSelf: "flex-end" }}
                            >
                              Projects
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>

        {/* list */}
        <ProjectOne />
        <ProjectTwo />
        <ProjectFour />
        <ProjectThree />
      </>
    );
  }
}
