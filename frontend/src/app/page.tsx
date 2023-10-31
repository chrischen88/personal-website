"use client";
import React from "react";
import { Avatar, Box, Toolbar, Button, AppBar, Typography } from "@mui/material";
import AboutPage from "@/components/AboutPage";
import LandingPage from "@/components/LandingPage";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();
  return (
    <>
      {/* <AppBar position="sticky">
          <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  chrsschnn.me
              </Typography>
              <Button color='inherit' onClick={() => {router.push('/about')}}>About</Button>
              <Button color='inherit' onClick={() => {router.push('/resume')}}>Resume</Button>
              <Button color='inherit' onClick={() => {router.push('/projects')}}>Projects</Button>
              <Button color='inherit' onClick={() => {router.push('/contact')}}>Contact</Button>
          </Toolbar>
      </AppBar> */}
      <LandingPage />
      <AboutPage />
    </>
  );
};

export default HomePage;