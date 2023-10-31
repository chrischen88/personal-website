"use client";
import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const ContactPage = () => {
    return (
        <Container id='contact-page' sx={{display: 'flex', flexDirection:"row", alignItems:"center", justifyContent:"center", height:"90vh"}}>
            <Grid container spacing={3}>
                <Grid item xs={12} sx={{display:'flex', justifyContent:'center'}}>
                    <Typography variant='h2'>Want to Connect?</Typography>
                </Grid>
                <Grid item xs={3} sx={{display:'flex', justifyContent:'center'}}>
                    <Button href='https://www.linkedin.com/in/chrischen2191/' target='_blank'>
                        <LinkedInIcon sx={{fontSize: '5rem'}}/>
                    </Button>
                </Grid>
                <Grid item xs={3} sx={{display:'flex', justifyContent:'center'}}>
                    <Button href="https://github.com/chrischen88" target='_blank'>
                        <GitHubIcon sx={{fontSize: '5rem'}}/>
                    </Button>
                </Grid>
                <Grid item xs={3} sx={{display:'flex', justifyContent:'center'}}>
                    <Button href="mailto:chrischen2191@gmail.com">
                        <EmailIcon sx={{fontSize: '5rem'}}/>
                    </Button>
                </Grid>
                <Grid item xs={3} sx={{display:'flex', justifyContent:'center'}}>
                    <Button href="tel:+18324809659">
                        <PhoneIcon sx={{fontSize: '5rem'}}/>
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ContactPage;