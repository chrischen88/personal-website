"use client";
import React from "react";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";

const LandingPage = () => {
  return (
    <Container sx={{display: 'flex', flexDirection:"row", alignItems:"center", justifyContent:"center", height:"93vh"}}>
        <Grid container spacing={2} minHeight={300}>
            <Grid item xs={12} md={4}>
                <Box display='flex' justifyContent='center' height='100%'>
                    <Avatar alt="Christopher Chen" src="/pic_of_me.jpg" sx={{width:"18rem", height:"18rem"}} />
                </Box>
            </Grid>
            <Grid item xs={12} md={8}>
                <Box display='flex' flexDirection='column' alignItems='left' justifyContent='center' height='100%'>
                    <Typography variant='h3' fontSize='5vh'>Hi! My name is Christopher Chen</Typography>
                    <Typography variant='h4' fontSize='3vh'>I am a software engineer based in New York City.</Typography>
                </Box>
            </Grid>
        </Grid>
    </Container>
  );
};

export default LandingPage;