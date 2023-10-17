"use client";

import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const router = useRouter();
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    chrsschnn.me
                </Typography>
                <Button color='inherit' onClick={() => {router.push('/about')}}>About</Button>
                <Button color='inherit' onClick={() => {router.push('/resume')}}>Resume</Button>
                <Button color='inherit' onClick={() => {router.push('/projects')}}>Projects</Button>
                <Button color='inherit' onClick={() => {router.push('/contact')}}>Contact</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
