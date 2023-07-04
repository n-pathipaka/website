import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { logos, title, description, linkText, link, logolinks } = props;


	const LogoList = ({ logos , logolinks}) => {
		return (
		  <div className="project-logo">
			<div className="icon-row">
			{logos.map((logo, index) => (
			  <img src={logolinks[logo]} alt={`Logo ${index + 1}`} key={index} />
			))}
			</div>
		  </div>
		);
	  };

	return (
		<React.Fragment>
			<div className="project">
				<Link to={link}>
					<div className="project-container">

						<LogoList logos={logos} logolinks ={logolinks} />
						{/* <div className="project-logo">
							<img src={logo} alt="logo" />
									<div className="icon-row">
									<img src={logo} alt="logo" />
									<img src={logo} alt="logo" />
									<img src={logo} alt="logo" />
									</div>
						</div> */}
						<div className="project-title">{title}</div>
						<div className="project-description">{description}</div>
						<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>

							<div className="project-link-text">{linkText}</div>
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Project;
