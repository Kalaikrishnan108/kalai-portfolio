import React, { useState } from "react";
import hanskake from "../assets/images/hand-shake.jpg";
import bgimg from "../assets/images/subscribe-scaled.jpg";
import { RiUserLocationFill } from "react-icons/ri";
import { IoMdContact } from "react-icons/io";
import { MdMarkEmailRead } from "react-icons/md";
import axios from "axios";

function Contact() {
  const initialState = {
    name: { required: false },
    email: { required: false },
    phone_Num: { required: false },
    website: { required: false },
    message: { required: false },
    coustom_error: { required: false },
  };

  const [data, setData] = useState({
    name: "",
    email: "",
    phone_Num: "",
    website: "",
    message: "",
  });

  const [error, setError] = useState(initialState);
  const [send, setSend] = useState(false);
  function handleChange(e) {
    let key = e.target.name;
    let value = e.target.value;
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  }

  function SendData() {
    let errVal = initialState;
    let haserror = false;

    if (data.name === "") {
      errVal.name.required = true;
      haserror = true;
    }
    if (data.email === "") {
      errVal.email.required = true;
      haserror = true;
    }
    if (data.phone_Num === "") {
      errVal.phone_Num.required = true;
      haserror = true;
    }
    if (data.message === "") {
      errVal.message.required = true;
      haserror = true;
    }
    setError({ ...errVal });
    try {
      async function GetData() {
        const apiUrl = await axios.post(
          "https://67544f0636bcd1eec850cb23.mockapi.io/users",
          data
        );
        const DataValue = await apiUrl.data;
        console.log(DataValue);
      }
      GetData();
    } catch (e) {
      console.log(e.message);
    } finally {
      if (data.name === "") {
        errVal.email.required = true;
        return;
      }
      setSend(true);
      setTimeout(() => {
        setSend(false);
      }, 2000);
    }
  }

  return (
    <>
      <div className="contact-section" data-aos="fade-down" id="contact">
        <div className="top-head-cot">
          <h2>Contact Us</h2>
        </div>
        <div className="container">
          <div className="center-cot" dat-aos="fade-up">
            <div className="head-cen text-center">
              <h3>GET IN TOUGH</h3>
              <h4>
                Let's discuss
                <span> About an Project !</span>
              </h4>
            </div>
            <div className="address-cm row justify-content-between">
              <div className="input-cm col-lg-7" data-aos="fade-down-left">
                <div className="input-list row justify-content-between">
                  <form className="row ">
                    <div className="input col-lg-6">
                      <input
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        onChange={(event) => handleChange(event)}
                      />
                      {error.name.required ? (
                        <p>Please fill out this field !</p>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="input col-lg-6">
                      <input
                        type="email"
                        placeholder="Your Email"
                        name="email"
                        onChange={(event) => handleChange(event)}
                      />
                      {error.email.required ? (
                        <p>Please fill out this field !</p>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="input col-lg-6">
                      <input
                        type="tel:+919791551390"
                        placeholder="Phone No"
                        name="phone_Num"
                        onChange={(event) => handleChange(event)}
                      />
                      {error.phone_Num.required ? (
                        <p>Please fill out this field !</p>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="input  col-lg-6">
                      <input
                        type="text"
                        placeholder="Your Webiste"
                        name="website"
                        onChange={(event) => handleChange(event)}
                      />
                      {error.name.required ? (
                        <p>Please fill out this field !</p>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="text-area col-lg-12">
                      <textarea
                        name="message"
                        id=""
                        placeholder="message"
                        onChange={(event) => handleChange(event)}
                      ></textarea>
                      {error.name.required ? (
                        <p>Please fill out this field !</p>
                      ) : (
                        ""
                      )}
                    </div>
                    <button
                      className="col-lg-10"
                      type="button"
                      onClick={() => SendData()}
                    >
                      Sumbit
                    </button>
                  </form>
                </div>
              </div>
              <div className="map col-lg-5" data-aos="fade-up-left">
                <img src={hanskake} alt="" />
                <div className="content-map ">
                  <h3>Let's Connect</h3>
                  <p>
                    HR is your first step to landing a Front-End Developer role.
                    From writing clear job descriptions that highlight your
                    expertise in HTML, CSS, JavaScript, and frameworks like
                    React let's Great Connecting You !.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-img-cot">
          <div className="bg-img">
            <img src={bgimg} alt="" />
            <div className="container ">
              <div className="top-letter row " data-aos="fade-down-left">
                <h4>SUBCRIPE MY NEWSLETTER</h4>
                <div className="input">
                  <form className="row">
                    <input
                      type="text"
                      className=" col-lg-6"
                      placeholder="Enter Your Email"
                    />
                    <button className="col-lg-3">sumbit</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="contact-list">
              <div className="container ">
                <div className="contact-pare">
                  <div className="contact top row ">
                    <div className="list-icons  col-lg-4" data-aos="fade-right">
                      <div className="img ">
                        <p>
                          <RiUserLocationFill />
                        </p>
                      </div>
                      <div className="content">
                        <h5>Address</h5>
                        <p>
                          {" "}
                          Commisioner colony , Pozhichalur, Pallavaram, Chennai
                          Pin Code :600074{" "}
                        </p>
                      </div>
                    </div>
                    <div className="list-icons col-lg-4 " data-aos="flip-right">
                      <div className="img ">
                        <p>
                          <IoMdContact />
                        </p>
                      </div>
                      <div className="content ">
                        <h5>Contact Us </h5>
                        <a href="tel:+919791551390">+91 :9791551390</a>
                        <a href="tel:+919600507195">+91 :9600507195</a>
                      </div>
                    </div>
                    <div className="list-icons col-lg-4" data-aos="fade-right">
                      <div className="img ">
                        <p>
                          <MdMarkEmailRead />
                        </p>
                      </div>
                      <div className="content ">
                        <h5>Send us Mail</h5>
                        <a href="gmailto:kalaikrishnak108@gmail.com">
                          E-mail : kalaikrishnak108@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="copy-rights row justify-content-between">
                    <div className="list-copy col-lg-4 col-sm-4">
                      <p>
                        &#169; <span>Netlify </span> ALL Rights are Reserved
                      </p>
                    </div>

                    <div className="list-copy col-lg-7 col-sm-7">
                      <ul className=" row">
                        <li className="col-lg-5 col-sm-4">
                          Terms & Conditions
                        </li>
                        <li className="col-lg-3 col-sm-4">Privacy Policy</li>
                        <li className="col-lg-3 col-sm-4">SiteMap</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {send ? (
          <h4 className={send ? "contact-abs" : ""}>
            Hi ! {`${data.name}`} Thank You Contacting to me, I will Contact You
            soon....{" "}
          </h4>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Contact;
