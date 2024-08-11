import React, { useState, useEffect } from "react";
import "./App.css";
import {
  Box,
  Button,
  Container,
  createTheme,
  ThemeProvider,
  Typography,
  Rating,
  AppBar,
  Toolbar,
  CardMedia,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import Modal from "./modal.js";
import Marque from "./Marquee.js";
import ImageLoop from "./ImageLoop.js";
import Footer from "./footer.js";
export default function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#12153a",
        // main: "#233142",
        light: "#455d7a",
      },

      secondary: {
        main: "#f95959",
      },
      third: {
        main: "#e3e3e3",
      },
    },
  });
  let [changeHeadingToggel, setChangeHeadingToggle] = useState(true);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setChangeHeadingToggle((changeHeadingToggel) => !changeHeadingToggel);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);
  let [modalToggel, setModelToggel] = useState(false);
  const getStarted = () => {
    console.log("getStarted");
    setModelToggel((modalToggel) => !modalToggel);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <div>
          <div className="root"></div>
          <Container
            className="container"
            maxWidth="xl"
            sx={{
              backgroundColor: "",
              fontWeight: "900",
              paddingTop: "10vh",
            }}
          >
            <AppBar
              sx={{
                position: "fixed",
                // backgroundColor: "beige",
                maxWidth: "100%",
              }}
            >
              <Toolbar
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Box className="playwrite-cl">For solution</Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    width: "40vw",
                  }}
                >
                  <Box className="navigation">Home</Box>
                  <Box className="navigation">About US</Box>
                  <Box className="navigation">Products</Box>
                  <Box className="navigation">Blog</Box>
                </Box>
              </Toolbar>
            </AppBar>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                maxHeight: "700px",
                // backgroundColor: "red",
                position: "relative",
                // overflow: "hidden",
              }}
              className="firstPage"
            >
              <Box
                className="headingContainer"
                sx={{
                  fontSize: "7rem",
                  Width: "100%",
                  fontFamily: "poppins",

                  // paddingRight: "10px",
                  // top: "100px",
                  color: "primary.main",
                }}
              >
                {changeHeadingToggel ? (
                  <Box className=" heading">
                    Help your students visualize concepts
                  </Box>
                ) : (
                  <Box className="heading">Make your workspace productive</Box>
                )}
                <Box
                  sx={{
                    fontWeight: 300,
                    color: "primary.light",
                    maxWidth: "35rem",
                  }}
                  className="sub-heading"
                >
                  {changeHeadingToggel ? (
                    <>
                      With our digital classroom solution and 3D content, you
                      can help students who find it difficult to visualize
                      concepts.
                    </>
                  ) : (
                    <>
                      with our FLP display panels which offer crystal-clear
                      visuals, ensuring information are communicated
                      effectively. Integrated cameras provide high-definition
                      video conferencing capabilities, allowing seamless remote
                      collaboration.
                    </>
                  )}
                </Box>
              </Box>

              <Box sx={{ paddingTop: "100px" }} className="smartBoard">
                <img
                  alt="smartBoard"
                  src="/smartboard.svg"
                  // height="500px"
                  width="60vw"
                  className="headingImage"
                ></img>
              </Box>
            </Box>
            <Modal isOpen={modalToggel} onClose={getStarted}>
              hello
            </Modal>
            <Button variant="contained" color="primary" onClick={getStarted}>
              Get Started
            </Button>
            <br />
            <Rating
              defaultValue={4.5}
              precision={0.5}
              readOnly
              sx={{ marginTop: "2vh" }}
            />
            <Box
              sx={{
                paddingTop: "5vh",
                fontFamily: "Playwrite CL, cursive",
                width: "100%",
                textAlign: "center",
                fontSize: "3rem",
                fontWeight: "900",
              }}
            >
              Trusted By
            </Box>
            <Marque />
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Playwrite CL,cursive",
                fontWeight: "1000",
                width: "100%",
                textAlign: "center",
                marginTop: "5vh",
              }}
            >
              Why choose Us?
            </Typography>
            <Box
              sx={{ display: "flex", marginTop: "5vh", width: "100%" }}
              className="cardContainer"
            >
              <Card sx={{ margin: "10px", width: "100%" }}>
                <CardMedia
                  className="cardImage"
                  component="img"
                  height="300px"
                  width="300px"
                  src="/cpu.jpg"
                />

                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "900", marginBottom: "10px" }}
                  >
                    Top of the Line Specs
                  </Typography>
                  <Typography>
                    Our touchscreen panels come with OPS units featuring
                    high-end CPUs and components, ensuring future-proof
                    performance. Unlike other IFP companies, our panels offer
                    seamless, powerful computing for a superior user experience,
                    handling demanding educational software with ease and
                    enhancing modern classrooms.
                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ margin: "10px", width: "100%" }}>
                <CardMedia
                  className="cardImage"
                  component="img"
                  height="300px"
                  width="300px"
                  src="/apps.jpeg"
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "800", marginBottom: "10px" }}
                  >
                    Software Solution
                  </Typography>
                  <Typography>
                    Our software suite includes a Campus Management System,
                    Ebook Portal, Curriculum-Aligned Courses,Exam paper creation
                    tool Robotics Lab, Smart Drawing App, and Screen Share
                    functionality. These tools streamline administration,
                    enhance teaching, and foster student engagement, empowering
                    schools with modern, efficient, and a All-in-one solution
                    for modern classrooms.
                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ margin: "10px", width: "100%" }}>
                <CardMedia
                  className="cardImage"
                  component="img"
                  height="300px"
                  width="300px"
                  src="/vrgirl.png"
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "800", marginBottom: "10px" }}
                  >
                    Learn visualy
                  </Typography>
                  <Typography>
                    Our 3D and 2D content enhances visual learning for students,
                    making complex concepts easier to grasp. By providing
                    immersive and interactive visualizations, our resources
                    bring subjects to life, helping students understand and
                    retain information more effectively. This approach caters to
                    different learning styles, engages students in a dynamic
                    way, and fosters a deeper comprehension of educational
                    material.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            <Typography
              variant="h3"
              sx={{
                // backgroundColor: "red",
                width: "100%",
                textAlign: "center",
                fontFamily: "Playwrite CL,cursive",
                fontWeight: "900",
                paddingTop: "10vh",
              }}
            >
              Products
            </Typography>
            <Grid sx={{ paddingTop: "10vh" }} container spacing={8}>
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    height: "400px",
                    // backgroundColor: "red",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    overflow: "hidden",
                  }}
                >
                  {" "}
                  <Box sx={{ height: "80%", width: "90%" }}>
                    <ImageLoop
                      urls={{
                        url1: "/neod-65.webp",
                        url2: "/neod-65(1).webp",
                        url3: "/neod-65(2).webp",
                        url4: "/neod-65(3).webp",
                        url5: "/neod-98.webp",
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      paddingTop: "1vh",
                      fontFamily: "poppins",
                      FontWeight: "bold",
                      fontSize: "1rem",
                    }}
                    variant="h4"
                  >
                    65 inch Alpha series Interactive White Digital Board
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    height: "400px",
                    // backgroundColor: "red",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    overflow: "hidden",
                  }}
                >
                  {" "}
                  <Box sx={{ height: "80%", width: "90%" }}>
                    <ImageLoop
                      urls={{
                        url2: "/dc(1).webp",
                        url4: "/dc(3).webp",
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      paddingTop: "1vh",
                      fontFamily: "poppins",
                      FontWeight: "bold",
                      fontSize: "1rem",
                    }}
                    variant="h4"
                  >
                    Complete Digital Smart Classroom Solution
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    height: "400px",
                    // backgroundColor: "red",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    overflow: "hidden",
                  }}
                >
                  {" "}
                  <Box sx={{ height: "80%", width: "90%" }}>
                    <ImageLoop
                      urls={{
                        url1: "/robotics.webp",
                        url2: "/robotics(1).webp",
                        url3: "/robotics(2).webp",
                        url4: "/robotics(3).webp",
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      paddingTop: "1vh",
                      fontFamily: "poppins",
                      FontWeight: "bold",
                      fontSize: "1rem",
                    }}
                    variant="h4"
                  >
                    Iot Learning Kit
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    height: "400px",
                    // backgroundColor: "red",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    overflow: "hidden",
                  }}
                >
                  {" "}
                  <Box sx={{ height: "80%", width: "90%" }}>
                    <ImageLoop
                      urls={{
                        url1: "/camera.webp",
                        url2: "/camera(1).webp",
                        url3: "/camera(2).webp",
                        url4: "/camera(3).webp",
                        url5: "/camera(4).webp",
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      paddingTop: "1vh",
                      fontFamily: "poppins",
                      FontWeight: "bold",
                      fontSize: "1rem",
                    }}
                    variant="h4"
                  >
                    Ai Camera Devices
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    height: "400px",
                    // backgroundColor: "red",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    overflow: "hidden",
                  }}
                >
                  {" "}
                  <Box sx={{ height: "80%", width: "90%" }}>
                    <ImageLoop
                      urls={{
                        url1: "/podium.webp",
                        url2: "/podium(1).webp",
                        url3: "/podium(2).webp",
                        url4: "/podium(3).webp",
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      paddingTop: "1vh",
                      fontFamily: "poppins",
                      FontWeight: "bold",
                      fontSize: "1rem",
                    }}
                    variant="h4"
                  >
                    Smart Digital Podium
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    height: "400px",
                    // backgroundColor: "red",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    overflow: "hidden",
                  }}
                >
                  {" "}
                  <Box sx={{ height: "80%", width: "90%" }}>
                    <ImageLoop
                      urls={{
                        url1: "/notice.webp",
                        url2: "/notice(2).webp",
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      paddingTop: "1vh",
                      fontFamily: "poppins",
                      FontWeight: "bold",
                      fontSize: "1rem",
                    }}
                    variant="h4"
                  >
                    Neod 55 Inches A-Type Digital Signage
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

// test 1
