import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import loadable from '@loadable/component';
import LazyLoadModal from "./common/LazyLoadModal";
// include global scss
import "./global.scss";
// pages
const Home = loadable(() => import("./pages/home"));
const Projects = loadable(() => import("./pages/projects"));
// common
const Header = loadable(() => import("./common/header"));

class AppRoutes extends Component {
  render() {
    return (
      <>
      <div data-scroll-container="">
        <Header/>
        <Routes>
          <Route 
          index 
          element={
            <Suspense fallback={<LazyLoadModal />}>
              <Home/>
            </Suspense>
          } />
          <Route 
          path="projects" 
          element={
            <Suspense fallback={<LazyLoadModal />}>
              <Projects />
            </Suspense>
          } />
        </Routes>
        </div>
      </>
    );
  }
}

export default AppRoutes;
