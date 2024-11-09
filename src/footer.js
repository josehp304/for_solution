import React from "react";
import { Box, Typography } from "@mui/material";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          minHeight: "400px",
          backgroundColor: "primary.main",
          padding: { xs: 1, sm: 4, md: 8 },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "primary.light",
            fontFamily: "poppins",
            fontWeight: "900",
          }}
        >
          For Solution
        </Typography>
        <Box
          sx={{
            paddingTop: "10px",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            columnGap: "5rem",
            rowGap: "2rem",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3925.82021742843!2d76.20832787503484!3d10.276065289843899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1731133907410!5m2!1sen!2sin"
            width="300"
            height="300"
            style={{ border: "0" }}
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <Box sx={{ color: "primary.light" }}>
            <Typography variant="h4" sx={{ fontFamily: "poppins" }}>
              Offices
            </Typography>
            <Typography vairant="h5" sx={{ paddingTop: "1rem" }}>
              Kottayam office:
            </Typography>
            <Typography vairant="h6" sx={{ paddingLeft: "1rem" }}>
              Ayamkudy-Kaduthuruthy Rd,
              <br /> Muttuchira,Kottayam, Kerala
              <br /> 686613
            </Typography>
            <Typography vairant="h5" sx={{ paddingTop: "1rem" }}>
              Thrissur office:
            </Typography>
            <Typography vairant="h6" sx={{ paddingLeft: "1rem" }}>
              1st Floor UMMER BUILDING,
              <br /> IRINJALIKUDA, Thrissur,KERALA
              <br /> 680121
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontFamily: "poppins",
                fontWeight: "900",
                color: "primary.light",
                textAlign: "center",
              }}
            >
              Connect with us on social media
            </Typography>
            <br />
            <Box>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.x.com/for_solutiongrp"
              >
                <XIcon
                  color="third"
                  sx={{
                    height: "30px",
                    width: "30px",
                    pr: "10px",
                    "&:hover": {
                      transform: "Scale(1.1)",
                    },
                  }}
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/company/for-solution/?viewAsMember=true"
              >
                {" "}
                <LinkedInIcon
                  color="third"
                  sx={{
                    height: "30px",
                    width: "30px",
                    pr: "10px",
                    "&:hover": {
                      transform: "Scale(1.1)",
                    },
                  }}
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/for_solutiongrp/"
              >
                <InstagramIcon
                  color="third"
                  sx={{
                    height: "30px",
                    width: "30px",
                    pr: "10px",
                    "&:hover": {
                      transform: "Scale(1.1)",
                    },
                  }}
                />
              </a>
              <FacebookIcon
                color="third"
                sx={{
                  height: "30px",
                  width: "30px",
                  pr: "10px",
                  "&:hover": {
                    transform: "Scale(1.1)",
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
