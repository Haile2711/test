import "./home.scss";
import Topbar from "../components/topbar/Topbar";
import Intro from "../components/intro/Intro";
import Card from "../components/card/Card";

export default function Home() {
  return (
    <div className="home">
        <Topbar />
        <div className="section">
            <Intro />
            <Card />
        </div>
    </div>
  )
}
