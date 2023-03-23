import React from "react";
import "./App.css";
import { projectData } from "../Data/data";

export const projectData = () => {
  return (
    <>
      <div className="project-container">
      {projectData.map((data, key) => {
          return (
            <div key={key}>
              {data.Name +
                " , " +
                data.DeployedLink +
                " ," +
                data.GitHubLink +
                ", " +
                data.img}
            </div>
          );
        })}
      </div>
    </>
  );
};
      
      
      
      
