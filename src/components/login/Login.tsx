"use client";
import { Box, Button } from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();
  console.log("session 2 => ", { session });

  // if (status === "loading") {
  //   return <p>Loading...</p>;
  // }

  if (session) {
    return (
      <>
        <Button variant={"contained"} color={"error"} onClick={() => signOut()}>
          Sign out
        </Button>
      </>
    );
  }
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>{session ? "Thank you for logging in" : "Please log in"}</h2>
        <Button
          variant={"contained"}
          color={"success"}
          onClick={() => signIn()}
        >
          Sign in
        </Button>
      </Box>
    </>
  );
};

export default Login;
