"use client";

import React, { useRef } from 'react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const router = useRouter();
    const scrollTo = (elementId: string) => {document.getElementById(elementId)?.scrollIntoView({behavior:'smooth'})};
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    chrsschnn.me
                </Typography>
                <Button color='inherit' onClick={() => scrollTo('about-page')}>About</Button>
                <Button color='inherit' onClick={() => {router.push('/projects')}}>Projects</Button>
                <Button color='inherit' onClick={() => {router.push('/contact')}}>Contact</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
