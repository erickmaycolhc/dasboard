"use client";
import Login from "@/components/login/Login";
import { useSession } from "next-auth/react";
import React from "react";
import scss from "./Home.module.css";
import Dashboard from "./dashboard/Dashboard";

const Home: React.FC = () => {
  const { data: session } = useSession();
  return (
    <main className={scss.main}>
      {session && <Dashboard />}
      {!session && <Login />}
    </main>
  );
};

export default Home;
