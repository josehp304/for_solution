import { useState, useEffect } from "react";
import React from "react";
import { Box } from "@mui/material";
export default function ImageLoop({ urls }) {
  let urlArray = Object.values(urls);
  let [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % urlArray.length);
    }, 7000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <Box
        sx={{
          height: "100%",
          width: "100%",
          // backgroundColor: "green",
          display: "flex",
          justifyContent: "center",
          transition: "all 0.1s ease-in",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        <img height="100%" src={urlArray[currentIndex]}></img>
      </Box>
    </>
  );
}
