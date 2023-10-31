"use client";
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const AboutPage = () => {
    return (
        <Container id='about-page' sx={{display: 'flex', flexDirection:"row", alignItems:"center", justifyContent:"center", height:"90vh"}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant='h3'>I am a software engineer based in New York City,</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='h5'>and I am committed to continuous learning and collaboration to drive positive change in the way we view and interact with technology.</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='h5'>I was born and raised in Texas (Houston, Austin, and Dallas!)</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='h5'>My interest for computer science started in high school, where I actively learned about different programming concepts in class and as an extracurricular, regularly competing in the University Interscholastic League (UIL) in Computer Science.</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='h5'>The interest became a passion when I went to the University of Texas at Austin and majored in Computer Science, and I learned so much more about the logic and theories behind coding and even life!</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='h5'>Now I live in New York City with my dog AKA my best buddy Paco, and I enjoy doing things like DJing and sewing.</Typography>
                </Grid>
                <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center'}}>
                    <a href="/my_resume.pdf" target="_blank" rel="noopener noreferrer">
                        <Button variant='contained' sx={{width:175}}>Click Here to view my Resume</Button>
                    </a>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AboutPage;