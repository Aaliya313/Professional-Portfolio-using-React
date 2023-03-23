import React from "react";
import { Link } from "react-router-dom";
import "../mainbodycontact/style.css";

function Mainbody() {
  return (
    <div className="body">
        <h1>Contact Links</h1>
        <h4>GitHub: <Link to="https://github.com/Aaliya313">https://github.com/Aaliya313</Link></h4> {/*links dont work*/}
        <h4>LinkedIn: <Link to="https://linkedin.com/in/aaliya-ladha-2ab5521b0/">https://linkedin.com/in/aaliya-ladha-2ab5521b0/</Link> </h4>
        <h4>Email: <Link to="exampleemail@hotmail.com">exampleemail@hotmail.com</Link></h4>
        <h4>CV: <Link to="https://drive.google.com/drive/folders/1dgXjKGdybfwtPmvNicUvtp6CkjZKtbZt?usp=share_link">Curriculum Vitae</Link></h4>
    </div>
     
  );
}

export default Mainbody;