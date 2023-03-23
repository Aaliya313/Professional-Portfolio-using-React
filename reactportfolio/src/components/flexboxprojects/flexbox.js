import React from "react";
import { Link } from "react-router-dom";

export default function App(){
  return (
    <>
      <div className="d-flex flex-row mb-3">
        <div className="p-2">
          <h3>Refactoring code</h3>
          <Link to="https://aaliya313.github.io/edX-RefactoringCode/">Deployed Link</Link>
          <br/>
          <Link to="https://github.com/Aaliya313/edX-RefactoringCode.git">GitHub Link</Link>
          <br />
           <img src="https://placehold.co/200x200" alt="Refactoring Code Screenshot"></img>
        </div>

        <div className="p-2">
        <h3>CSS Portfolio</h3>
          <Link to="https://aaliya313.github.io/Professional_Portfolio/">Deployed Link</Link>
          <br/>
          <Link to="https://github.com/Aaliya313/Professional_Portfolio.git">GitHub Link</Link>
          <br />
           <img src="https://placehold.co/200x200" alt="CSS Portfolio Screenshot"></img>
        </div>

        <div className="p-2">
        <h3>Bootstrap Bootfolio</h3>
          <Link to="https://aaliya313.github.io/Bootstrap-Portfolio/">Deployed Link</Link>
          <br/>
          <Link to="https://github.com/Aaliya313/Bootstrap-Portfolio.git">GitHub Link</Link>
          <br />
           <img src="https://placehold.co/200x200" alt="Bootstrap portfolio Screenshot"></img>
        </div>

      </div>
      <div className="d-flex flex-row">
        <div className="p-2">
        <h3>Using Console.log</h3>
          <Link to="https://github.com/Aaliya313/Console-Finances1.git">GitHub Link. <br/>Not deployed</Link>
          <br />
           <img src="https://placehold.co/200x200" alt="Using Console.log Screenshot"></img>
        </div>

        <div className="p-2">
        <h3>Password Generator</h3>
          <Link to="https://aaliya313.github.io/Module-5-Homework-Password-Generator-Challenge/">Deployed Link</Link>
          <br/>
          <Link to="https://github.com/Aaliya313/Module-5-Homework-Password-Generator-Challenge.git">GitHub Link</Link>
          <br />
           <img src="https://placehold.co/200x200" alt="Password Generator Screenshot"></img>
        </div>

        <div className="p-2">
        <h3>Web-quiz</h3>
          <Link to="https://aaliya313.github.io/Module6-Homework-Challenge-Web-APIs-Code-Quiz/">Deployed Link</Link>
          <br/>
          <Link to="https://github.com/Aaliya313/Module6-Homework-Challenge-Web-APIs-Code-Quiz.git">GitHub Link</Link>
          <br />
           <img src="https://placehold.co/200x200" alt="Web-quiz Screenshot"></img>
        </div>
      </div>
    </>
  );
}