import "./home.scss";
import Topbar from "../components/topbar/Topbar";
import Intro from "../components/intro/Intro";
import Card from "../components/card/Card";
import PostCard from "../components/postCard/PostCard";
import Talent from "../components/talents/Talent";
import Project from "../components/project/Project";
import Guide from "../components/guide/Guide";
import Documents from "../components/documents/Documents";
import Contact from "../components/contact/Contact";
export default function Home() {
  return (
    <>
        <Topbar />
    <div className="home">
            <Intro />
            <Card />
            <PostCard />
            <Talent />
            <Project />
            <Guide />
            <Documents />
            <Contact />
    </div>
    </>
  )
}
