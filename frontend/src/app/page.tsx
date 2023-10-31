"use client";
import React from "react";
import { Avatar, Box, Toolbar, Button, AppBar, Typography } from "@mui/material";
import AboutPage from "@/components/AboutPage";
import LandingPage from "@/components/LandingPage";
import { useRouter } from "next/navigation";
import ProjectPage from "@/components/ProjectPage";

const HomePage = () => {
  const router = useRouter();
  return (
    <>
      <LandingPage />
      <AboutPage />
      <ProjectPage />
    </>
  );
};

export default HomePage;