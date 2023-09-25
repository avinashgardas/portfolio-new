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
                              Peter Logan's Steakhouse
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
                              backgroundColor: `#1E1F23`,
                              color: `#fff !important`
                            }}
                          >
                            <div className="accordion-content-row">
                              <div className="accordion-content-col">
                                <div className="accordion-image-wrapper">
                                  <img
                                    src="https://i.ibb.co/Zm2MZVm/screenshot-rocks-1.png"
                                    alt="Styllar"
                                    loading="lazy"
                                    width="614"
                                    height="614"
                                    srcSet=""
                                    sizes="(max-width: 614px) 100vw, 614px"
                                  />
                                </div>
                              </div>
                              <div className="accordion-content-col primary-col" style={{color: `#FFF`}}>
                                <h4 className="accordion-content-col-title">
                                HTML, CSS, JavaScript
                                </h4>
                                <div>
                                  <p>
                                  Created a website as a part of the Cross-Platform Web Design CST8117 program
                                  </p>
                                  <p>
                                  Designed and developed a responsive website from scratch using HTML, CSS, and JavaScript
                                  </p>
                                </div>
                                <div className="button-container">
                                  <a
                                    href="https://peter-logans-steakhouse.netlify.app/"
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
