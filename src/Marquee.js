import { padding, width } from "@mui/system";
import React from "react";
import Marquee from "react-fast-marquee";

export default function Marque() {
  const imgStyle = { height: "100px", width: "100px", paddingLeft: "100px" };
  return (
    <>
      <Marquee speed={25}     pauseOnHover={true}>
        <img style={imgStyle} src="/iit.png"></img>
        <img style={imgStyle} src="/stanford (1).png"></img>
        <img style={imgStyle} src="/wipro.png"></img>
        <img style={imgStyle} src="/static/Harvard.png"></img>
        <img style={imgStyle} src="/delhi.png"></img>
        <img style={imgStyle} src="/bvb.png"></img>
        <img style={imgStyle} src="/iit.png"></img>
        <img style={imgStyle} src="/stanford (1).png"></img>
        <img style={imgStyle} src="/wipro.png"></img>
        <img style={imgStyle} src="/static/Harvard.png"></img>
        <img style={imgStyle} src="/delhi.png"></img>
        <img style={imgStyle} src="/bvb.png"></img>
      </Marquee>
    </>
  );
}
