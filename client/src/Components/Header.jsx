import React from "react";
import pic5 from '../images/pic5.png'
import frame from "../images/Frame.png"
function Header() {
  return (
    <div class="header" >
      <div style={{ backgroundColor: "#001738", display: "inline", width: "54px", paddingTop: "20px" }}>
        <img src={frame}></img>
      </div>
      <div className="pro">
        <div className="info">
          <span className="name">wahid kahn</span>
          <span className="des">Group name</span>
        </div>
        <div>
          <img src={pic5}></img>
        </div>
      </div>
    </div>
  );
}

export default Header;