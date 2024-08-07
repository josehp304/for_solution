import React from "react";
import ReactDOM from "react-dom";
import { Card, CardContent, Box, Button, TextField } from "@mui/material";
import "./Modal.css";
export default function Modal({ isOpen, onClose, children }) {
  const id = document.getElementById("modal");
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
              <TextField label="Full Name*" variant="standard" />
              <TextField label="Email*" variant="standard" />
              <TextField label="Organisation Name" variant="standard" />
              <TextField label="Phone number" variant="standard" />
              <TextField label="Full Name" variant="standard" />
              <Button variant="contained">Submit</Button>
              <Button>Reset</Button>
            </Box>
          </CardContent>
        </Card>
      </>,
      id
    );
  }
}
