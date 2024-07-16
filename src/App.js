import React from "react";
export default function App() {
  return (
    <>
      <div className="app bg-githubbg h-screen">
        <div className="nav absolute bg-navBlack  w-full h-[9vh] flex items-center justify-between pt-5">
          <img
            src="/website_logo_whitecircle.png"
            alt="error"
            className="h-[65px] pl-7 pr-7 "
          />
          <ul class="text-2xl text-white h-full flex justify-between items-center w-[40vw] pr-7">
            <li>Home</li>
            <li>About Us</li>
            <li>Pricing </li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="h-full">
          <div className="shadow bg-navBlack h-[111%] w-full absolute "></div>
          <div className="main-1 ">
            <video
              className="h-full w-full object-cover"
              src="/teacher.mp4"
              autoPlay
              playsInline
              loop
              muted
            ></video>
          </div>
        </div>
        <div className=" main-2 bg-githubbg h-full"></div>
      </div>
    </>
  );
}
