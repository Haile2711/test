import "./talent.scss";
import { Rerousel } from 'rerousel';
import { useRef } from "react";
import {talents} from "../../data"

export default function Talent() {
    const talent = useRef(null)
  return (
    <div className="talent">
        <div className="top">
            <div className="title">
                <div className="circle">

                </div>
                <span className="text">Talents: Most Ative</span>
                <button className="btnShow">Show all</button>
            </div>
            <div className="desc">
                Vietnam’s first innovation platform empowered by credit utility and more than 10K experts network at    
            </div>
        </div>
        <div className="bottom">
            <Rerousel itemRef ={talent} className="wrapper" interval="5000">
                <div className="wrapper" ref={talent}>
                    {talents.map((talent) => (
                    <div className="container" key={talent.id}>
                        <img className="avatar" src={talent.img} alt="" />
                        
                        <div className="tag" >
                            <div className="tagItem">INTERNET</div>
                            <div className="tagItem">CODE</div>
                            <div className="tagItem">PHP</div>
                        </div>
                        <div className="talentName">
                            {talent.name}
                        </div>
                        <div className="jobs">
                            {talent.jobs}
                        </div>
                        <div className="items">
                            <img className="iconMess" src="./assets/mess.png" alt=""/>
                            <button className="btnFollow">Follow</button>
                        </div>
                    </div>
                    ))}
            </div>
            </Rerousel>
        </div>
    </div>
  )
}
