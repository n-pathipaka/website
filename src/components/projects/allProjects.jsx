import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";


// const logos = [
// 	"cpp",
// 	// Add more logo URLs as needed
//   ];

const AllProjects = () => {
	return (
		<div className="all-projects-container">
			{INFO.projects.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logos={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
						logolinks={INFO.logolinks}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
