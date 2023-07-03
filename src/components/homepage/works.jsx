import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./samsung.png"
								alt="samsung"
								className="work-image"
							/>
							<div className="work-title">Samsung</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2018 - 2021</div>
						</div>

						{/* <div className="work">
							<img
								src="./twitter.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Twitter</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2019 - Present</div>
						</div> */}
					</div>
				}
			/>
		</div>
	);
};

export default Works;
