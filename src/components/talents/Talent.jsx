import "./talent.scss";
import {talents} from "../../data";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import { Pagination, Navigation,Autoplay } from "swiper";


export default function Talent() {

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
            <Swiper 
             slidesPerView={3}
             slidesPerGroup={3}
             loop={true}
             loopFillGroupWithBlank={true}
             pagination={{
               clickable: true,
             }}
             autoplay={{
                delay: 2500,
              }}
             navigation={true}
             modules={[Pagination, Navigation,Autoplay]}
             className="mySwiper">
            {talents.map((talent) => (
                <SwiperSlide >
                <div className="container" >
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
                </SwiperSlide>
            ))}        
        </Swiper>
        </div>
    </div>
  )
}
