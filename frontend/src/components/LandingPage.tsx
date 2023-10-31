"use client";
import React from "react";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";

const LandingPage = () => {
  return (
    <Container sx={{display: 'flex', flexDirection:"row", alignItems:"center", justifyContent:"center", height:"90vh"}}>
        <Box>
            <Avatar alt="Christopher Chen" src="/pic_of_me.jpg" sx={{width:"20vh", height:"20vh"}} />
        </Box>
        <Box sx={{display: 'flex', flexDirection:"column", px: 4}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant='h3'>Hi! My name is Christopher Chen</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='h4'>I am a software engineer based in New York City.</Typography>
                </Grid>
            </Grid>
        </Box>
    </Container>
  );
};

export default LandingPage;