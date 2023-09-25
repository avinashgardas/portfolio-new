import React, { Component } from 'react'

export default class ProjectOne extends Component {
    constructor(props) {
        super(props);
    
        // Set initial state
        this.state = { accordionOne: false };
      }

  render() {
    return (
        <div className="row-fluid-wrapper row-depth-1 row-number-6 home-row-5-padding dnd-section home-row-5-force-full-width-section">
        <div className="row-fluid">
          <div
            className="span12 widget-span widget-type-custom_widget dnd-module"
            data-widget-type="custom_widget"
            data-x="0"
            data-w="12"
          >
            <div
              id="hs_cos_wrapper_home-module-6"
              className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module"
              data-hs-cos-general-type="widget"
              data-hs-cos-type="module"
            >
              <section
                className="custom-accordion-section connected-data"
                style={{
                  color: `#1e1e1e`,

                  paddingBottom: `2.5em`,

                  backgroundColor: `#ebebeb`,
                }}
              >
                <div className="content-wrapper">
                  <section className="section-accordion">
                    <ul className="custom-accordion-list-group project">
                      <li className="custom-accordion-list-item">
                        <a
                          href="#accordion-project-1"
                          className="custom-accordion-toggle-btn h4"
                          onClick={() => {
                            this.setState({
                              accordionOne: !this.state.accordionOne,
                            });
                          }}
                        >
                          <span className="accordion-toggle-btn-title-wrapper">
                            <span className="accordion-toggle-btn-title">
                              Open Door Ministries India
                            </span>
                          </span>
                          <span className="accordion-toggle-btn-icon">
                            <span className="icon-wrapper">
                              <svg
                                width="30"
                                height="31"
                                viewBox="0 0 30 31"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{
                                  transform: this.state.accordionOne
                                    ? `rotate(225deg)`
                                    : `none`,
                                }}
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M14.443 14.431H0V15.57H30V14.431H15.583L15.57 0L14.43 0.001L14.443 14.431ZM14.43 31L14.444 17.71L15.584 17.711L15.57 31.001L14.43 31Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </span>
                          </span>
                        </a>
                        <div
                          id="accordion-project-1"
                          className="collapse"
                          style={{
                            display: this.state.accordionOne
                              ? `block`
                              : `none`,
                          }}
                        >
                          <div
                            className="accordion-content"
                            style={{
                              backgroundColor: `#f58733`,
                              color: `#fff !important`,
                            }}
                          >
                            <div className="accordion-content-row">
                              <div className="accordion-content-col">
                                <div className="accordion-image-wrapper">
                                  <img
                                    src="https://i.ibb.co/YPPgGnm/project-odm-india.png"
                                    alt="Styllar"
                                    loading="lazy"
                                    width="614"
                                    height="614"
                                    srcSet=""
                                    sizes="(max-width: 614px) 100vw, 614px"
                                  />
                                </div>
                              </div>
                              <div className="accordion-content-col primary-col">
                                <h4 className="accordion-content-col-title">
                                HTML, React.js, SCSS, Firebase services
                                </h4>
                                <div>
                                  <p>
                                  Open Door Ministries Church website to inform potential visitors about the church, its vision, and on-going activities.
                                  </p>
                                  <p>
                                  Designed and added features to the website to provide information to the congregation.
                                  </p>
                                </div>
                                <div className="button-container">
                                  <a
                                    href="https://odmindia.com/"
                                    className="btn-icon-link right"
                                  >
                                    View this project
                                    <span className="icon">
                                      <svg
                                        width="54"
                                        height="33"
                                        viewBox="0 0 54 33"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M46.9 11.9L36.1 1.3L37.4 0L49.6 11.9H46.9ZM0 15.5H50.7H53.3L54 16.2L37.4 32.4L36.1 31.1L50.2 17.4H0V15.5Z"
                                          fill="currentColor"
                                        ></path>
                                      </svg>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    {/* <div className="section-button-container button-container right">
                      <a
                        href="https://webisoft.com/projects?hsLang=en"
                        className="btn-circle h4"
                      >
                        <span>View all projects</span>
                        <svg
                          width="86"
                          height="86"
                          viewBox="0 0 86 86"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M42.9 0C66.6 0 85.8 19.2 85.8 42.9C85.8 66.6 66.6 85.9 42.9 85.9C19.2 85.9 0 66.6 0 42.9C0 19.2 19.2 0 42.9 0ZM43.9 41.9V25.3H41.9V41.9H25.3V43.9H41.9V60.5H43.9V43.9H60.5V41.9H43.9Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </a>
                    </div> */}
                  </section>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
