import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./App.css";
import "./crayonFont.css";
import { useRef } from "react";
import VanillaTilt from "vanilla-tilt";

export default function App() {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to(".nav", {
      duration: 2,
      scrollTrigger: {
        trigger: ".main-2",
        start: "top center",
        scrub: true,
        onEnter: () =>
          document.querySelector(".nav").classList.add("bg-navBlack"),
        onLeaveBack: () =>
          document.querySelector(".nav").classList.remove("bg-navBlack"),
        marker: true,
      },
    });
  });
  useGSAP(() => {
    gsap.to(".main-2", {
      scrollTrigger: {
        trigger: ".main-2",
        start: "top center",
        scrub: true,
        onEnter: () => {
          document.querySelector(".shadow").classList.add("bg-black");
          document.querySelector(".shadow").classList.remove("bg-navBlack");
          document.querySelector(".main-2").classList.add("bg-black");
          document.querySelector(".main-2").classList.remove("bg-navBlack");
        },
        onLeaveBack: () => {
          document.querySelector(".shadow").classList.remove("bg-black");
          document.querySelector(".shadow").classList.add("bg-navBlack");
          document.querySelector(".main-2").classList.remove("bg-black");
          document.querySelector(".main-2").classList.add("bg-navBlack");
        },
      },
    });
  });

  const main2Ref = useRef();
  function scrollToMain2() {
    if (main2Ref) {
      main2Ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  useEffect(() => {
    if (typeof document !== "undefined") {
      let coords = { x: 0, y: 0 };
      let circles = document.querySelectorAll(".circle");
      circles.forEach((circle) => {
        circle.x = 0;
        circle.y = 0;
      });
      function animateCircle() {
        let x = coords.x;
        let y = coords.y;
        circles.forEach((circle, index) => {
          circle.style.left = x + "px";
          circle.style.top = y + "px";
          circle.x = x;
          circle.y = y;
          circle.style.scale = (circles.length - index) / 10;

          const nextCircle = circles[index + 1] || circles[0];
          x += (nextCircle.x - x) * 0.2;
          y += (nextCircle.y - y) * 0.2;
        });
      }
      window.addEventListener("mousemove", (e) => {
        coords.x = e.clientX;
        coords.y = e.clientY;

        if (coords.y <= 10) {
          circles.forEach((circle) => {
            circle.style.opacity = 0;
          });
        } else {
          circles.forEach((circle) => {
            circle.style.opacity = 1;
          });
        }
        requestAnimationFrame(animateCircle);
      });
    }
  }, []);
  const aboutRef = useRef();
  useEffect(() => {
    VanillaTilt.init(aboutRef.current, {
      max: 5,
      speed: 200,
      glare: true,
      "max-glare": 0.5,
    });
  });

  return (
    <>
      <div className="cursor">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <div className="app bg-githubbg h-screen box-border ">
        <div className="nav fixed z-20  w-full h-[9vh] flex items-center justify-between  ">
          <img
            src="/website_logo_whitecircle.png"
            alt="error"
            className="h-[65px] pl-7 pr-7  hover:h-[75px] "
          />
          <ul className="nav-items text-2xl text-white h-full flex justify-between items-center w-[800px]  pr-7 ">
            <li className="hover:text-gray-300  ">Home</li>
            <li className="hover:text-gray-300  ">About Us</li>
            <li className="hover:text-gray-300  ">Pricing </li>
            <li className="hover:text-gray-300  ">Contact Us</li>
          </ul>
        </div>
        <div className="h-full">
          <div className="shadow bg-navBlack h-full w-full absolute z-10 transition duration-500 ease-in-out">
            <div className=" container-1 absolute left-[50%] translate-x-[-50%] h-full w-[1400px]  flex flex-col items-center justify-center  ">
              <div className="text-container top-[40vh] flex flex-col items-center">
                <h1 className="   text-white font-extrabold text-[7vmax] ">
                  FOR SOLUTION
                </h1>
                <h1 className="  text-white text-[1vmax] ">
                  𝐓𝐫𝐚𝐧𝐬𝐟𝐨𝐫𝐦𝐢𝐧𝐠 𝐈𝐝𝐞𝐚𝐬 𝐈𝐧𝐭𝐨 𝐈𝐧𝐭𝐞𝐫𝐚𝐜𝐭𝐢𝐯𝐞 𝐒𝐨𝐥𝐮𝐭𝐭𝐢𝐨𝐧𝐬
                </h1>
              </div>
            </div>
            <div className="glow-button-container absolute bottom-5 flex justify-center items-center h-[12vmax] w-[12vmax]">
              <div className="glow_button relative h-[10vw] w-[10vw] bg-white rounded-full m-5 flex justify-center items-center">
                <button onClick={scrollToMain2}>
                  <img
                    alt="down"
                    className=""
                    src="/211615_down_c_arrow_icon.svg"
                  ></img>
                </button>
              </div>
            </div>
          </div>
          <div className="main-1 ">
            <video
              className="h-full w-full fixed object-cover -z-2"
              src="/teacher.mp4"
              autoPlay
              playsInline
              loop
              muted
            ></video>
          </div>
        </div>
        <div
          ref={main2Ref}
          className=" main-2 bg-navBlack transition duration-500 ease-in-out min-h-[100px] w-full text-xl text-white relative "
        >
          <div className="container relative min-h-full w-[1400px] left-[50%] translate-x-[-50%] ">
            {/* <img
              className="vr opacity-0  translate-x-[-200px] transition-all duration-800 linear h-[200px]"
              src="/vr(transparent).svg"
              alt="error, image not loading"
            ></img> */}
            <div className="feature-page min-h-[900px]   w-full pt-[100px] pb-[100px]  ">
              <div className="heading text-5xl text-center  font-extrabold">
                <p>
                  Raising The Bar With
                  <br /> Industry-first Features
                </p>
                <img
                  alt="error"
                  className="underline h-[100px] justify-self-center z-[-1]"
                  src="/underline.svg"
                ></img>
              </div>
              <div className="card item-1 bg-white rounded-[50px] w-full flex justify-center items-center flex-col text-black ">
                <div className="card-img ci1 h-[100px] w-[100px] mt-[10px] "></div>
                <p className="p-5">
                  Elit voluptate ut velit nisi in aute. Officia eu ut aute
                  ullamco et est veniam. Eu culpa culpa nisi nulla nulla magna
                  ea qui. Duis est deserunt proident aliqua quis est labore
                  eiusmod est sint cillum
                </p>
              </div>
              <div className="card item-2 bg-white rounded-[50px] w-full flex justify-center items-center flex-col text-black">
                <div className="card-img ci2 h-[100px] w-[100px] mt-[10px] "></div>
                <p className="p-5">
                  Elit voluptate ut velit nisi in aute. Officia eu ut aute
                  ullamco et est veniam. Eu culpa culpa nisi nulla nulla magna
                  ea qui. Duis est deserunt proident aliqua quis est labore
                  eiusmod est sint cillum
                </p>
              </div>
              <div className="card item-3 bg-white rounded-[50px] w-full flex justify-center items-center flex-col text-black">
                <div className="card-img ci3 h-[100px] w-[100px] mt-[10px] "></div>
                <p className="p-5">
                  Elit voluptate ut velit nisi in aute. Officia eu ut aute
                  ullamco et est veniam. Eu culpa culpa nisi nulla nulla magna
                  ea qui. Duis est deserunt proident aliqua quis est labore
                  eiusmod est sint cillum
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white min-h-[200px] w-full bg-specialPurple relative">
          <div className="circle-scatter w-full"></div>
          <div className="wave wave-1 w-full">
            <div className="about_us_container pt-[100px] min-h-[700px]  w-[1400px] relative left-[50%] translate-x-[-50%] overflow-hidden">
              <div
                ref={aboutRef}
                className="about-us-1 h-[500px] w-full relative left-[-20%] "
              >
                <h1 className="text-[3rem] font-extrabold">About Us</h1>
                <h1 className="text-[1rem] p-[10px]">
                  Enim labore aliquip culpa deserunt. Mollit aute sunt ullamco
                  ad fugiat aliquip id nostrud. Sit est commodo exercitation
                  ullamco anim fugiat sint mollit. Ex fugiat et ad amet deserunt
                  sit deserunt id elit exercitation
                </h1>
              </div>
              <div
                style={{ fontFamily: "shadow" }}
                className="trusted  text-[5rem] text-center"
              >
                Trusted by
                <br /> 100+ Institutes
              </div>
            </div>
            <div>
              <div className="scroller">
                <div className="scrollerc inline-block">
                  <img
                    alt="stanford"
                    src="/stanford (1).png"
                    height="150px"
                    width="150px"
                    className="inline-block whitespace-nowrap ml-[10rem]"
                  ></img>
                  <img
                    alt="delhi university"
                    src="/delhi.png"
                    height="150px"
                    width="150px"
                    className="inline-block whitespace-nowrap ml-[10rem]"
                  ></img>
                  <img
                    alt="harvard university"
                    src="/harvard.png"
                    height="150px"
                    width="150px"
                    className="inline-block whitespace-nowrap ml-[10rem]"
                  ></img>
                  <img
                    alt="iit"
                    src="/iit.png"
                    height="150px"
                    width="150px"
                    className="inline-block whitespace-nowrap ml-[10rem]"
                  ></img>
                  <img
                    alt="bvb"
                    src="/bvb.png"
                    height="150px"
                    width="150px"
                    className="inline-block whitespace-nowrap ml-[10rem]"
                  ></img>
                  <img
                    alt="wipro"
                    src="/wipro.png"
                    height="150px"
                    width="150px"
                    className="inline-block whitespace-nowrap ml-[10rem]"
                  ></img>
                </div>
                <div className="scrollerc inline-block">
                  <img
                    alt="stanford"
                    src="/stanford (1).png"
                    height="150px"
                    width="150px"
                    className="inline-block whitespace-nowrap ml-[10rem]"
                  ></img>
                  <img
                    alt="delhi university"
                    src="/delhi.png"
                    height="150px"
                    width="150px"
                    className="inline-block whitespace-nowrap ml-[10rem]"
                  ></img>
                  <img
                    alt="harvard university"
                    src="/harvard.png"
                    height="150px"
                    width="150px"
                    className="inline-block whitespace-nowrap ml-[10rem]"
                  ></img>
                  <img
                    alt="iit"
                    src="/iit.png"
                    height="150px"
                    width="150px"
                    className="inline-block whitespace-nowrap ml-[10rem]"
                  ></img>
                  <img
                    alt="bvb"
                    src="/bvb.png"
                    height="150px"
                    width="150px"
                    className="inline-block whitespace-nowrap ml-[10rem]"
                  ></img>
                  <img
                    alt="wipro"
                    src="/wipro.png"
                    height="150px"
                    width="150px"
                    className="inline-block whitespace-nowrap ml-[10rem]"
                  ></img>
                </div>
                <div className="scrollerc inline-block">
                  <img
                    alt="stanford"
                    src="/stanford (1).png"
                    height="150px"
                    width="150px"
                    className="inline-block whitespace-nowrap ml-[10rem]"
                  ></img>
                  <img
                    alt="delhi university"
                    src="/delhi.png"
                    height="150px"
                    width="150px"
                    className="inline-block whitespace-nowrap ml-[10rem]"
                  ></img>
                  <img
                    alt="harvard university"
                    src="/harvard.png"
                    height="150px"
                    width="150px"
                    className="inline-block whitespace-nowrap ml-[10rem]"
                  ></img>
                  <img
                    alt="iit"
                    src="/iit.png"
                    height="150px"
                    width="150px"
                    className="inline-block whitespace-nowrap ml-[10rem]"
                  ></img>
                  <img
                    alt="bvb"
                    src="/bvb.png"
                    height="150px"
                    width="150px"
                    className="inline-block whitespace-nowrap ml-[10rem]"
                  ></img>
                  <img
                    alt="wipro"
                    src="/wipro.png"
                    height="150px"
                    width="150px"
                    className="inline-block whitespace-nowrap ml-[10rem]"
                  ></img>
                </div>
              </div>
              <div className="skill w-[1600px] min-h-[1000px] relative left-[50%] translate-x-[-50%]  ">
                <div
                  className=" text-center text-[5rem] mt-[5rem] relative font-extrabold  "
                  style={{ fontFamily: "shadow" }}
                >
                  Robotics Labs
                  <img
                    alt="error"
                    className="underline h-[100px] w-[30rem]  relative left-[50%] translate-x-[-50%]"
                    src="/underline.svg"
                  ></img>
                </div>
                <div className="skills w-full min-h-[1000px] ">
                  <div className="robotics w-full h-full bg-black rounded-xl p-5 text-[2rem] text-black font-extrabold">
                    <div className="robotics-title  shadow-xl ">Robotics</div>
                  </div>
                  <div className="class-wise">
                    <div className="class c-1 bg-yellow-300 w-full h-[25%] rounded-xl mb-5 flex">
                      <img
                        alt=" "
                        src="/04-05(t).png"
                        height="100px"
                        width="100px"
                      ></img>
                      <ul className="list-disc p-5">
                        <li>Identify robot components</li>
                        <li>Assemble basic line-following robots</li>
                      </ul>
                    </div>
                    <div className="class c-2 bg-blue-300 w-full h-[25%] rounded-xl mb-5 flex">
                      <img
                        alt=""
                        src="/06-07(t).png"
                        height="100px"
                        width="100px"
                      ></img>
                      <ul className="list-disc p-5">
                        <li>Introduction to Arduino programming basics</li>
                        <li>Program robots for specific tasks</li>
                      </ul>
                    </div>
                    <div className="class c-3 bg-red-400 w-full h-[25%] rounded-xl mb-5 flex">
                      <img
                        alt=""
                        src="/08-10(t).png"
                        height="100px"
                        width="100px"
                      ></img>
                      <ul className="list-disc p-5">
                        <li>Explore advanced sensors</li>
                        <li>Design and build autonomous robots</li>
                      </ul>
                    </div>
                  </div>
                  <div className="project w-full h-full ">
                    <h1 className="text-center text-[3rem] font-extralight">
                      Project Topics
                    </h1>
                    <ul className="relative left-[50%] translate-x-[-50%] list-disc w-[50%] pt-5">
                      <li>Pick and Place Robot</li>
                      <li>Bluetooth Bot</li>
                      <li>Line Tracker</li>
                      <li>Avoidance Bot</li>
                      <li>Spider Walker</li>
                      <li>Chatter Bot</li>
                      <li>Remote Rover</li>
                      <li>Flame Fighter</li>
                      <li>Gesture Guide </li>
                      <li>Floor Cleaner</li>
                    </ul>
                  </div>
                  <div className="robotics-vid  rounded-[50px] overflow-hidden">
                    <video
                      src="/line-follow.webm"
                      autoPlay
                      loop
                      playsInline
                      muted
                    ></video>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer min-h-[30vh] bg-black flex flex-wrap justify-between">
            <div className="flex flex-wrap">
              <div className="map p-[50px] ">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.3400417772723!2d76.3964639401598!3d10.152990164152842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080882748f4a6f%3A0x30b2ebe45d968458!2sCochin%20International%20Airport!5e0!3m2!1sen!2sin!4v1722375961124!5m2!1sen!2sin"
                  width="300"
                  height="300"
                  style={{ border: 0, borderRadius: "10px" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div
                // style={{ fontFamily: "shadow" }}
                className="w-[400px]  p-[50px] pt-[20px]"
              >
                <h1 className="text-[2rem] text-center font-semibold">
                  Addresses
                </h1>
                <h3 className="pt-3">
                  Thrissur - 1'st floor ummer building, irinjalikuda, Chalakudy
                </h3>
                <h3 className="pt-3">
                  Kottayam - 2'nd floor kunumpurathu building, ayamkudy,
                  kottayam
                </h3>
              </div>
            </div>
            <div className="">Connect with us on social media</div>
          </div>
        </div>
      </div>
    </>
  );
}
