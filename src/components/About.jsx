import React, { useState } from "react";
import { BiSolidDownload } from "react-icons/bi";
import menimg from "../assets/images/about_img.jpg";
import linkln from "../assets/images/download-ln.png";
import axios from "axios";

function About() {
  const initialStat = {
    name: { required: false },
    email: { required: false },
    phone_Num: { required: false },
    message: { required: false },
    curstom_error: false,
  };
  const [send, dataSend] = useState(false);
  const [userdata, setUserData] = useState({
    name: "",
    email: "",
    phone_Num: "",
    message: "",
  });
  const [error, setErrors] = useState(initialStat);

  // get tough me function
  function UserGetData(e) {
    let key = e.target.name;
    let value = e.target.value;

    setUserData((prev) => {
      return { ...prev, [key]: value };
    });
    setErrors((prev) => {
      return { ...prev, [key]: "" };
    });
    // console.log(userdata)
  }
  function sumbitData(e) {
    try {
      let errorVal = initialStat;
      let haserror = false;
      if (userdata.name === "") {
        errorVal.name.required = true;
        haserror = true;
      }
      if (userdata.email === "") {
        errorVal.email.required = true;
        haserror = true;
      
      }
      if (userdata.phone_Num === "") {
        errorVal.phone_Num.required = true;
        haserror = true;
    
      }
      if (userdata.message === "") {
        errorVal.message.required = true;
        haserror = true;
      }
      

      setErrors({ ...errorVal });
      async function SendData() {
        const postData = await axios.post(
          "https://67544f0636bcd1eec850cb23.mockapi.io/users",
          userdata
        );

        const apiData = await postData.data;
        console.log(apiData);
      }
      SendData();
    } catch (e) {
      console.log(e.message);
    } finally {
      if (userdata.name === "") {
        errorVal.name.required = true;
        haserror = true;
        return
      }       
      dataSend(true);
      setTimeout(()=>{
      dataSend(false)
    },3000)
    }
    
  }
  
  


  //  About us project fun

  return (
    <div className="about-section" id="about" data-aos="fade-down">
      <div className="container">
        <h3>ABOUT ME</h3>
        <div className="about-ct row" data-aos="fade-right">
          <div className="ft-content-ab col-lg-7">
            <h3>
              Transforming Ideas into
              <span> Interactive Websites</span>
            </h3>
            <p>
              Hi ! I’m Kalaiselvan Krishnan,I'm Front-end Developer with a
              passion for Like HTML,CSS,BOOSTRAP,TAILWIND,REACT. then I'am a
              freshers, I specialize, delivering creative solutions and
              high-quality results. I’m always eager to learn and grow, and I
              enjoy taking on new challenges. Let’s connect!
            </p>
            <a href="" download>
              Download Cv
              <span>
                <BiSolidDownload />
              </span>
            </a>
          </div>
          <div className="content-ab col-lg-5">
            <img src={menimg} alt="" />
          </div>
        </div>
        <div className="st-about-ct row " data-aos="fade-up-left">
          <div className="abt-get col-lg-6 col-sm-12">
            <h3>
              <span>User Interactive</span> Websites ,<p>Resposive Websites</p>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              corporis dicta facere eos, molestiae unde eum alias ad, libero
              enim animi incidunt quis minus adipisci odit, numquam aliquam
              omnis saepe?
            </p>
            <div className="about-link ">
              <h3>LET'S CONNECT</h3>
              <p>
                I'm Seeking for a front-end developer to create an interactive
                image feature for our website. The project involves making
                specific areas of a high-quality image clickable or hoverable,
                triggering dynamic interactions such as pop-ups, tooltips, or
                zoom effects.
              </p>
            </div>
          </div>
          <div
            className="input-abt col-lg-6 col-sm-12"
            data-aos="fade-up-right"
          >
            <h4>GET TOUGH ME ?</h4>
            <div className="inputs">
              <form className="row">
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  value={userdata.name}
                  className="col-sm-12 col-lg-12"
                  onChange={(event) => UserGetData(event)}
                />
                {error.name.required ? (
                  <p> please fill out this field !</p>
                ) : (
                  ""
                )}
                <input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={userdata.email}
                  className="col-sm-12 col-lg-12"
                  onChange={(event) => UserGetData(event)}
                />
                {error.email.required ? (
                  <p> please fill out this field !</p>
                ) : (
                  ""
                )}
                <input
                  type="text"
                  placeholder="Your Mobile Number"
                  name="phone_Num"
                  value={userdata.phone_Num}
                  className="col-sm-12 col-lg-12"
                  onChange={(event) => UserGetData(event)}
                />
                {error.phone_Num.required ? (
                  <p> please fill out this field !</p>
                ) : (
                  ""
                )}
                <textarea
                  name="message"
                  id=""
                  placeholder="Message"
                  value={userdata.message}
                  className="col-sm-12 col-lg-12"
                  onChange={(event) => UserGetData(event)}
                ></textarea>
                {error.message.required ? (
                  <p> please fill out this field !</p>
                ) : (
                  ""
                )}
                <button type="button" onClick={() => sumbitData()}>
                  Sumbit Now
                </button>
              </form>
              
            </div>
                

          </div>
        </div>
      </div>
       <>{

        send ? <h3 className={send ? "sendDatavalid" : "datavalid"}> HI ! {`${userdata.name}`},Thank You For Contact Me, I will Contact you soon....</h3>:""
  }</>
    </div>
    
  );
}

export default About;
