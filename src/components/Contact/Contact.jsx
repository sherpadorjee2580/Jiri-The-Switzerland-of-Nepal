import React, { forwardRef, useRef, useState } from "react";
import "../Contact/style/Contact.css";
import { FaMountainSun } from "react-icons/fa6";
import { HiMapPin } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = forwardRef((props, ref) => {
  const [display, setDisplay] = useState("none");

  //Ref
  const form = useRef();
  const emailRef = useRef();
  const nameRef = useRef();
  const msgRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const message = msgRef.current.value;

    if (name !== "" && email !== "" && message !== "") {
      console.log("It is not emplty");

      setDisplay("flex");

      setTimeout(() => {
        setDisplay("none");
      }, 2000);

      emailjs
        .sendForm(
          "service_vwdghii",
          "template_2aff7ma",
          form.current,
          "sYGqIcAiOOpB6WD8a"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
          },
          (error) => {
            console.error("FAILED...", error.text);
          }
        );
      e.target.reset();
    } else {
      console.log("It is empty");
      alert("Empty nachodinus na form ");
      setDisplay("none");
    }
  };

  return (
    <div ref={ref} className="contact">
      <div style={{ display: display }} className="submitted">
        <div className="container">
          <p>ThanYou for Contacting me ! 😊</p>
        </div>
      </div>
      <div className="sidebar">
        <div className="sidebar__container">
          
        </div>
      </div>
      <div className="contact__container">
        <div className="contact__top">
          <p className="contact__title">Contact Us</p>
          <p className="contact__desc">
            Any questions or remarks? Just Write us a message! I will respond to you as fast a possible.
          </p>
          <form ref={form} onSubmit={sendEmail} action="submit">
            <div className="emailNameContainer">
              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                  ref={emailRef}
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter a valid email address"
                />
              </div>
              <div className="name">
                <label htmlFor="name">Name</label>
                <input
                  ref={nameRef}
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your Name"
                />
              </div>
            </div>
            <textarea
              ref={msgRef}
              name="message"
              id="msg"
              placeholder="Enter your message"
            />
            <button className="submit" type="submit">
              submit
            </button>
          </form>
        </div>
        <div className="contact__bottom">
          <div className="contact__bottom-container">
            <div className="contact__bottom-row">
              <div className="contact__bottom-col">
                <div className="logo">
                  <FaMountainSun className="icons" />
                </div>
                <p className="title">about jiri</p>
                <p className="desc">
                  Switzerland of Nepal <br />
                  Gateway to Everest
                </p>
              </div>
              <div className="contact__bottom-col">
                <div className="logo">
                  <FaPhoneAlt className="icons" />
                </div>
                <p className="title">phone(landline)</p>
                <p className="desc">
                  +977 9810243211 <br />
                  +977 049-690650
                </p>
              </div>
              <div className="contact__bottom-col">
                <div className="logo">
                  <HiMapPin className="icons" />
                </div>
                <p className="title">visit information</p>
                <p className="desc">
                  Find help at local hotels or local shops.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Contact;
