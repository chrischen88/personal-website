"use client";

import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
    const scrollTo = (elementId: string) => {document.getElementById(elementId)?.scrollIntoView({behavior:'smooth'})};
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    chrsschnn.me
                </Typography>
                <Button color='inherit' onClick={() => scrollTo('about-page')}>About</Button>
                <Button color='inherit' onClick={() => scrollTo('project-page')}>Projects</Button>
                <Button color='inherit' onClick={() => scrollTo('contact-page')}>Contact</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
