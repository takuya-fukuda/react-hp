import HomeFirstSection from "../components/home/HomeFirstSection";
import HomeFourthSection from "../components/home/HomeFourthSection";
import HomeSecondSection from "../components/home/HomeSecondSection";
import HomeThirdSection from "../components/home/HomeThirdSection";
import Header from "../components/layout/Header";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="slider-container">
        <img src="/main.jpg" alt="Main Slider" className="slider-20 slide-42" />
      </div>
      <HomeFirstSection />
      <HomeSecondSection />
      <HomeThirdSection />
      <HomeFourthSection />
    </div>
  );
};

export default Home;
