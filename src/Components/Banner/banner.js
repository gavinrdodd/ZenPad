import "./banner.scss";

function Banner() {
  return (
    <div className="banner">
      <img src="images/zenpadLogo.svg" alt="ZenPadLogo. Img" className="zenpadLogo"></img>
      <p className="bannerTitle">ZenPad</p>
      <p className="bannerCopy">Exploring web development, one project at a time.</p>
    </div>
  );
}

export default Banner;
