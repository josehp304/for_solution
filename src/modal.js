import React from "react";
import ReactDOM from "react-dom";
import { Card, CardContent, Box, Button, TextField } from "@mui/material";
import "./Modal.css";
import { app, db } from "./firebaseConfig";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
export default function Modal({ isOpen, onClose }) {
  const id = document.getElementById("modal");
  let [fullName, setFullName] = useState("");
  let [email, setEmail] = useState(" ");
  let [phoneNo, setPhoneNo] = useState("");
  let [org, setOrg] = useState("");

  const handleSubmit = async () => {
    try {
      const docRef = addDoc(collection(db, "contact"), {
        fullName: fullName,
        email: email,
        phoneNumber: phoneNo,
        orgName: org,
      });
    } catch (e) {
      console.error(e);
    }
  };

  if (isOpen) {
    return ReactDOM.createPortal(
      <>
        <Box
          sx={{
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            // backdropFilter: "blur(5px)",
            zIndex: 1000,
          }}
        ></Box>
        <Card
          variant="outlined"
          sx={{
            position: "fixed",
            top: "55%",
            left: "50%",
            transform: "translate(-50%,-50%)",

            height: "80vh",
            zIndex: "1000",
          }}
          className="modalCard"
        >
          <Button
            sx={{
              position: "absolute",
              right: "10px",
              top: "10px",
              borderRadius: "99px",
            }}
            variant="outlined"
            onClick={() => {
              onClose();
            }}
          >
            X
          </Button>
          <CardContent sx={{ height: "100%" }}>
            <Box
              className="modalCardContent"
              sx={{
                height: "80%",
                display: "flex",
                flexDirection: "column",
                // alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <TextField
                label="Full Name*"
                variant="standard"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
              />
              <TextField
                label="Email*"
                variant="standard"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <TextField
                label="Phone number"
                variant="standard"
                value={phoneNo}
                onChange={(e) => {
                  setPhoneNo(e.target.value);
                }}
              />
              <TextField
                label="Organisation Name"
                variant="standard"
                value={org}
                onChange={(e) => {
                  setOrg(e.target.value);
                }}
              />

              <Button
                variant="contained"
                onClick={() => {
                  handleSubmit();
                  console.log(fullName, email, phoneNo, org);
                }}
              >
                Submit
              </Button>
              <Button
                onClick={() => {
                  setFullName("");
                  setEmail("");
                  setPhoneNo("");
                  setOrg("");
                }}
              >
                Reset
              </Button>
            </Box>
          </CardContent>
        </Card>
      </>,
      id
    );
  }
}
