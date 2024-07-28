import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./App.css";
import { useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import ThreeScene from "./threeScene";

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
          circle.style.scale = (circles.length - index) / 20;

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
          <ul className=" text-2xl text-white h-full flex justify-between items-center w-[800px]  pr-7 ">
            <li className="hover:text-gray-300  ">Home</li>
            <li className="hover:text-gray-300  ">About Us</li>
            <li className="hover:text-gray-300  ">Pricing </li>
            <li className="hover:text-gray-300  ">Contact Us</li>
          </ul>
        </div>
        <div className="h-full">
          <div className="shadow bg-navBlack h-full w-full absolute z-10 transition duration-500 ease-in-out">
            <div className=" absolute left-[50%] translate-x-[-50%] h-full w-[1400px]  flex flex-col items-center justify-center  ">
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
              <div className="glow_button relative h-[10vmax] w-[10vmax] bg-white rounded-full m-5 flex justify-center items-center">
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
          <div className="conatiner relative min-h-full w-[1400px] left-[50%] translate-x-[-50%] ">
            {/* <img
              className="vr opacity-0  translate-x-[-200px] transition-all duration-800 linear h-[200px]"
              src="/vr(transparent).svg"
              alt="error, image not loading"
            ></img> */}
            <div className="feature-page min-h-[900px]  w-full pt-[100px] pb-[100px]  ">
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
                <div className="card-img ci1 h-[100px] w-[100px] mt-[10px] ">
                  {/* <img className="h-[100px] mt-[10px]" src="/3d.svg"></img> */}
                </div>
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
        <div className="text-white min-h-[100px] w-full bg-specialPurple relative">
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
                  sit deserunt id elit exercitation voluptate non
                  nostrud.Incididunt dolore proident veniam sunt exercitation et
                  aliqua nisi. Officia minim officia eiusmod voluptate aliqua
                  veniam consectetur dolor. Pariatur mollit pariatur qui velit
                  minim veniam. Magna nisi cillum incididunt pariatur minim elit
                  officia incididunt sit mollit est ut dolor quis.
                </h1>
              </div>
              <div className="canvas_container  absolute bg-red-400 ">
                <ThreeScene />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
