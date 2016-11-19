import React from "react";
import { Link } from "react-router";

import projectStore from "../data/projectStore"

export default class Projects extends React.Component {
  render() {

    const { params } = this.props;
    const { projectParam } = params;
    
    let project,
        pageContent;

    for(let obj of projectStore) {
      if (obj.slug == projectParam) {
        project = obj;
        pageContent = (
          <div>
            <div class="project-showcase" 
                 style={{backgroundColor: obj.color}}>
              <iframe
                class="inside"
                scrolling="no"
                title="Step by step form"
                src={obj.frameURL}
                frameBorder="no"
                allowTransparency="true"
                allowFullScreen="true">
              </iframe>
            </div>
            <section>
              <h2>Projekt</h2>
              <h3>{project.name}</h3>
            </section>
          </div>
        );
      }
    }

    if (!project) {
      let pageContent = (
        <section class="intro">
          <h2>Error</h2>
        </section>
      );
    }

    return (
      <div>
        {pageContent}
      </div>
    );

  }
}