import React from "react";
import hospitals from "../assets/images/kk-hospitals.jpg";
import kkbikes from"../assets/images/kk-bikes.jpg";
import course from "../assets/images/course-in.jpg";
import netflix from "../assets/images/neflix.jpg";
import plusgin from "../assets/images/plusgin.jpg";
import unislink from '../assets/images/unis-link.jpg';

function Project() {
  return (
    <>
      <div className="project-section" id="project">
        <div className="container">
          <h2> Portfolio</h2>
          <div className="project-list">
            <div className="parent-list row justify-content-between" data-aos="fade-up-right">
              <div className="list list-1 course-in col-lg-4 col-sm-6">
                <a href="https://regal-croissant-38fc4a.netlify.app/">
                <img src={course} alt="" />
                <div className="content">
                  <h3>Course In Academy</h3>
                  <p>
                    Optimized the website for desktop, tablet, and mobile
                    devices, ensuring a smooth user experience on any screen
                    size.
                  </p>
                  <a href="https://regal-croissant-38fc4a.netlify.app/">Visit Site</a>
                </div>
                </a>
              </div>
              <div className="list list-1 netflix col-lg-4 col-sm-6" data-aos="fade-up-left">
                <a href="https://gregarious-rugelach-b88e84.netlify.app/">
                <img src={netflix} alt="" />
                <div className="content">
                  <h3>Netflix </h3>
                  <p>
                    Optimized the website for desktop, tablet, and mobile
                    devices, ensuring a smooth user experience on any screen
                    size.
                  </p>
                  <a href="https://gregarious-rugelach-b88e84.netlify.app/">Visit Site</a>
                  
                </div>
                </a>
              </div>
              <div className="list list-1 kk-hospital col-lg-4 col-sm-6" data-sos="flip-right">
                <a href="https://6753e343011381a236ca2222--genuine-crostata-f2a582.netlify.app/">
                <img src={hospitals} alt="" />
                <div className="content">
                  <h3>KK Hospitals</h3>
                  <p>
                    Optimized the website for desktop, tablet, and mobile
                    devices, ensuring a smooth user experience on any screen
                    size.
                  </p>
                  <a href="https://6753e343011381a236ca2222--genuine-crostata-f2a582.netlify.app/">Visit Site</a>
                </div>
                </a>
              </div>
              <div className="list list-1 kkbikes col-lg-4 col-sm-6" data-aos="fade-down-right">
               <a href="https://6753e4322f08e7a26d720a5b--iridescent-cannoli-59d62f.netlify.app/">
               <img src={kkbikes} alt="" />
                <div className="content">
                  <h3>KK Bikes</h3>
                  <p>
                    Optimized the website for desktop, tablet, and mobile
                    devices, ensuring a smooth user experience on any screen
                    size.
                  </p>
                  <a href="https://6753e4322f08e7a26d720a5b--iridescent-cannoli-59d62f.netlify.app/">Visit Site</a>
                </div>
               </a>
              </div>
              <div className="list list-1 plusgin col-lg-4 col-sm-6" data-aos="flip-left">
                <a href="https://marvelous-narwhal-c47ea7.netlify.app/">
                <img src={plusgin} alt="" />
                <div className="content">
                  <h3>Plusgin Medical </h3>
                  <p>
                    Optimized the website for desktop, tablet, and mobile
                    devices, ensuring a smooth user experience on any screen
                    size.
                  </p>
                  <a href="https://marvelous-narwhal-c47ea7.netlify.app/">Visit Site</a>
                </div>
                </a>
                </div>
              <div className="list list-6 unis-link col-lg-4 col-sm-6" data-aos="fade-down-left">
               <a href="">
               <img src={unislink} alt="" />
                <div className="content">
                  <h3>Unislink</h3>
                  <p>
                    Optimized the website for desktop, tablet, and mobile
                    devices, ensuring a smooth user experience on any screen
                    size.
                  </p>
                  <a href="">Visit Site</a>
                </div>
               </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
