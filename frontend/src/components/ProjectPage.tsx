"use client";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { projects } from "@/components/Projects";
import ProjectCard from "@/components/ProjectCard";


const ProjectPage = () => {
    return (
        <Container id='project-page' sx={{display: 'flex', flexDirection:"column", alignItems:"center", justifyContent:"center", height:"90vh", mt:10}}>
            <Box sx={{display: 'flex', justifyContent: 'center', pb:5}}>
                <Typography variant='h3'>Some Personal Projects</Typography>
            </Box>
            <Paper>
                <Grid container sx={{overflow:'auto', height:'65vh'}}>
                    {projects.map((project) => {
                        return (
                            <Grid item xs={4} key={project.title} sx={{p:2}}>
                                <ProjectCard
                                    projTitle={project.title}
                                    projThumb={project.thumbnail}
                                    projDesc={project.description}
                                    projTools={project.tools}
                                    projCode={project.github}
                                    projDemo={project.demo}
                                    projFullDesc={project.fullDesc} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Paper>
        </Container>
    )
};

export default ProjectPage;