import React from "react";
import classes from "./Projects.module.scss";
import { NavLink } from "react-router-dom";
import { Preloader } from "./../../../untils/preloader/preloader";
const Projects = props => {
  let content;
  if (!props.projects) {
    content = <Preloader></Preloader>;
  } else if (
    !props.projects[props.userId] ||
    !props.projects[props.userId].project
  ) {
    content = <div>You have no projects!</div>;
  } else if (props.projects[props.userId].project.length === 0) {
    content = <div>You have no projects!</div>;
  } else {
    
    content = (props.projects.project.slice(0).map(p => (
      <div className={classes.projectsBox} key={p.id}>
        <NavLink to={"/project/" + p.id} className={classes.title}>
          {p.NameProj}
        </NavLink>
        <p className={classes.text}>{p.Text}</p>
        <div className={classes.bottom}>
          <p className={classes.date}>{p.startdate}</p>
          <p className={classes.date}>{p.enddate}</p>
        </div>
      </div>
    )))
  }

  return (
    <div className={classes.Panel}>
      <div className={classes.projects}>{content}</div>
    </div>
  );
};

export default Projects;
