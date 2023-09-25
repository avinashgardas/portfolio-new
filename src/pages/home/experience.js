import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";
import jsonData from './res_primaryLanguage';

const data = jsonData;

class Experience extends Component {
  render() {
    if (data.experience && data.basic_info) {
      var sectionName = data.basic_info.section_name.experience;
      var work = data.experience.map(function (work, i) {
        const technologies = work.technologies;
        const mainTechnologies = work.mainTech;
        const icon = work.icon;

        var mainTech = mainTechnologies.map((technology, i) => {
          return (
            <Badge pill className="main-badge mr-2 mb-2" key={i}>
              {technology}
            </Badge>
          );
        });
        var tech = technologies.map((technology, i) => {
          return (
            <span pill className="experience-badge mr-2 mb-2" key={i}>
              {technology}
            </span>
          );
        });
        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={work.years}
            iconStyle={{
              background: "#0250f1",
              color: "#fff",
              textAlign: "center",
            }}
            icon={<i className={`${icon} experience-icon`}></i>}
            key={i}
          >
            <div style={{ textAlign: "left", marginBottom: "4px" }}>
              {mainTech}
            </div>

            <h3
              className="vertical-timeline-element-title"
              style={{ textAlign: "left", marginBottom: 16, fontWeight: 500, fontSize: 29 }}
            >
              {work.title}
            </h3>
            <h6
              className="vertical-timeline-element-subtitle"
              style={{ textAlign: "left", fontSize: 17 }}
            >
              {work.company}
            </h6>
            <div style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div>
          </VerticalTimelineElement>
        );
      });
    }

    return (
      <section id="resume" className="pb-5 content-wrapper" style={{maxWidth: `100%`}}>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
            {work}
            <VerticalTimelineElement
              iconStyle={{
                background: "#0250f1",
                color: "#fff",
                textAlign: "center",
              }}
              icon={
                <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
              }
            />
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Experience;
