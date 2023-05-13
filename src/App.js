import React from "react";
import myProfileImg from "./img/myProfileImg.jpg";
import myGithub from "./img/githubLinkLogo.png";
import myGmail from "./img/gmailLinkLogo.png";
import myInsta from "./img/instaLinkLogo.png";

function LeftSection() {
  return (
    <div
      className="left-section"
      style={{backgroundColor: "#1f416d", width: "400px"}}
    >
    <img src={myProfileImg} alt="My ProfileImg" className="myProfileImg"/>
      <p className="name">신유림</p>
      <div className="SNSLink">
        <img src={myGithub} alt="My Github" className="myGithub"/>
        <img src={myGmail} alt="My Gmail" className="myGmail"/>
        <img src={myInsta} alt="My Insta" className="myInsta"/>
        {/* ... */}
      </div>
      <p className="myMessage">&nbsp;숲이 자연의 재능을 가진 나무들로 이루어져 있듯이, 하나의 팀으로 놀라운 결과물을 만들어내는 개발자가 되고 싶습니다.</p>
    </div>
  );
}

export default LeftSection;
