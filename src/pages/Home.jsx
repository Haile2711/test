import "./home.scss";
import Topbar from "../components/topbar/Topbar";
import Intro from "../components/intro/Intro";
import Card from "../components/card/Card";
import PostCard from "../components/postCard/PostCard";
import Talent from "../components/talents/Talent";
import Project from "../components/project/Project";
export default function Home() {
  return (
    <div className="home">
        <Topbar />
        <div className="section">
            <Intro />
            <Card />
            <PostCard />
            <Talent />
            <Project />
        </div>
    </div>
  )
}
