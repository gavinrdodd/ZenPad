import ProfileCard from "./Components/Card/Profile Card/profileCard";
import DescriptionCard from "./Components/WebPage Description/descriptionCard";
import Banner from "./Components/Banner/banner";
import "./app.scss";

function App() {
  return (
    <div className="pageCards">
      <Banner />
      <ProfileCard />
      <DescriptionCard />
    </div>
  );
}

export default App;
