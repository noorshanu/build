import WelcomeBanner from "components/WelcomeBanner";
import Tasks from "sections/MyProfilePage/overview/Tasks";

function HomePage() {
  return (
    <div className="container-wrapper">
      <div className="mb-10">
        <WelcomeBanner />
      </div>
      <Tasks className="grid-cols-4" />{" "}
    </div>
  );
}

export default HomePage;
