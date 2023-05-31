import React from "react";
import "./style.scss";
import { jobExpData } from "../../DummyData";
import DescriptionHeading from "../descriptionHeading/DescriptionHeading";

const jobInfo = ({ key, year, role, description, company }) => {
  return (
    <div className="job" key={key}>
      <p className="year">{year}</p>
      <div className="job-info">
        <h2 className="role">{role}</h2>
        <span className="company">{company}</span>
      </div>
      <p>{description}</p>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="skills">
      <DescriptionHeading title={"Skills & Experience"} />
      <h1 className="page-title">MY RESUME</h1>
      <p className="intro">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris.
      </p>

      <div className="job-experience">
        {jobExpData.map(item => jobInfo(item))}
      </div>
    </div>
  );
};

export default Skills;
