import "./banner.scss";

function Banner() {
  return (
    <div className="banner">
      <img src="images/zenpadLogo.svg" alt="ZenPadLogo. Img" className="zenpadLogo"></img>
      <span className="bannerTitle">ZenPad</span>
      <span className="bannerCopy">Exploring web development, one project at a time.</span>
    </div>
  );
}

export default Banner;
