import ProfileCard from "./Components/Card/Profile Card/profileCard";
import DescriptionCard from "./Components/WebPage Description/descriptionCard";
import Banner from "./Components/Banner/banner";
import "./app.scss";

function App() {
  return (
    <div className="landingPage">
      <Banner />
      <div className="pageCards">
        <ProfileCard />
        <DescriptionCard />
      </div>
    </div>
  );
}

export default App;
