"use client";

import { Box } from "@mui/material";
import Login from "@/components/login/Login";
import { useSession } from "next-auth/react";

const SignIn = () => {
  const { data: session } = useSession();
  console.log("session 3 => ", { session });
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      ggggggggg
      <h2>{session ? "Thank you for logging in" : "Please log in"}</h2>
      <Login />
    </Box>
  );
};

export default SignIn;
