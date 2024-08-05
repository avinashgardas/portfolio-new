import React, { Component } from "react";
import "./_header.scss";

export default class Header extends Component {
  render() {
    return (
      <>
        <div>
          <header className="header">
            <a
              href="https://webisoft.com/#main-content"
              className="header__skip"
            >
              Skip to content
            </a>
            <div className="header-wrapper">
              <div className="header-content">
                <div className="container-xl">
                  <div className="header-content-inner">
                    <div className="logo-wrapper">
                      <div
                        id="hs_cos_wrapper_webisoft_logo"
                        className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-logo"
                        data-hs-cos-general-type="widget"
                        data-hs-cos-type="module"
                      >
                        <span
                          id="hs_cos_wrapper_webisoft_logo_hs_logo_widget"
                          className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_logo"
                          data-hs-cos-general-type="widget"
                          data-hs-cos-type="logo"
                        >
                          <a
                            href="/"
                            id="hs-link-webisoft_logo_hs_logo_widget"
                            style={{ borderWidth: 0, border: 0, textDecoration: 'none' }}
                          >
                            <h1 style={{ fontWeight: 'bolder', marginBottom: 0}}>Avinash Gardas</h1>
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="menu-primary desktop">
                      <nav
                        aria-label="Main menu"
                        className="navigation-primary"
                      >
                        <ul className="submenu level-1">
                          {/* <li className="has-submenu menu-item hs-skip-lang-url-rewrite">
                            <a href="javascript:;" className="menu-link">
                              Services
                            </a>
                            <ul className="submenu level-2">
                              <li className="no-submenu menu-item hs-skip-lang-url-rewrite">
                                <a
                                  href="https://webisoft.com/services"
                                  className="menu-link"
                                >
                                  All Services
                                </a>
                              </li>
                              <li className="no-submenu menu-item hs-skip-lang-url-rewrite">
                                <a
                                  href="https://webisoft.com/web-development"
                                  className="menu-link"
                                >
                                  Web Development
                                </a>
                              </li>
                              <li className="no-submenu menu-item hs-skip-lang-url-rewrite">
                                <a
                                  href="https://webisoft.com/mobile-app-development"
                                  className="menu-link"
                                >
                                  Mobile Development
                                </a>
                              </li>
                              <li className="no-submenu menu-item hs-skip-lang-url-rewrite">
                                <a
                                  href="https://webisoft.com/saas-app-development"
                                  className="menu-link"
                                >
                                  SaaS Development
                                </a>
                              </li>
                              <li className="no-submenu menu-item hs-skip-lang-url-rewrite">
                                <a
                                  href="https://webisoft.com/blockchain-development"
                                  className="menu-link"
                                >
                                  Blockchain Development
                                </a>
                              </li>
                              <li className="no-submenu menu-item hs-skip-lang-url-rewrite">
                                <a
                                  href="https://webisoft.com/hubspot"
                                  className="menu-link"
                                >
                                  HubSpot Development
                                </a>
                              </li>
                            </ul>
                          </li> */}
                          <li className="no-submenu menu-item hs-skip-lang-url-rewrite">
                            <a
                              href="#about"
                              className="menu-link"
                            >
                              About
                            </a>
                          </li>
                          <li className="no-submenu menu-item hs-skip-lang-url-rewrite">
                            <a
                              href="#projects"
                              className="menu-link"
                            >
                              Projects
                            </a>
                          </li>
                          <li className="no-submenu menu-item hs-skip-lang-url-rewrite">
                            <a
                              href=""
                              className="menu-link"
                            >
                              Resume
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    {/* <div className="header__language-switcher desktop header--element">
                      <div className="custom-language-switcher">
                        <a
                          href="https://webisoft.com/fr/"
                          className="hs-skip-lang-url-rewrite"
                          data-language="fr"
                        >
                          FR
                        </a>
                      </div>
                    </div> */}
                  </div>
                  <div className="header-button desktop">
                    <div
                      id="hs_cos_wrapper_button"
                      className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module"
                      data-hs-cos-general-type="widget"
                      data-hs-cos-type="module"
                    >
                      <a
                        className="btn btn-primary btn-sm btn-unstyled"
                        href="#contact-section"
                        title="Contact Us"
                        data-scroll-to=""
                      >
                        Contact
                      </a>
                    </div>
                  </div>
                  <button
                    className="no-button hamburger mobile"
                    type="button"
                    aria-label="Menu"
                    data-faitracker-form-bind="true"
                  >
                    <span className="nav-button"></span>
                    <span className="btn-clicked"></span>
                  </button>
                  
                </div>
              </div>
            </div>
          </header>
        </div>
      </>
    );
  }
}
