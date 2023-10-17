import { makeStyles, Theme } from "@mui/material";
import React from "react";
import { Avatar, Box, Container, Paper, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <Container sx={{display: 'flex', flexDirection:"row", alignItems:"center", justifyContent:"center", height:"90vh"}}>
      <Box>
        <Avatar alt="Christopher Chen" src="/pic_of_me.jpg" sx={{width:"20vh", height:"20vh"}} />
      </Box>
      <Box sx={{display: 'flex', flexDirection:"column", px: 4}}>
        <Typography variant="h3" component="h1" mt={2}>
          Christopher Chen
        </Typography>
        <Typography variant="h5" component="h1" mt={2}>
          Software Engineer
        </Typography>
      </Box>
    </Container>
  );
};

export default HomePage;