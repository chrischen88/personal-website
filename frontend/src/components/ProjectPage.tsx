"use client";
import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { projects } from "@/components/Projects";
import ProjectCard from "@/components/ProjectCard";


const ProjectPage = () => {
    return (
        <Container id='project-page' sx={{display: 'flex', flexDirection:"row", alignItems:"center", justifyContent:"center", height:"90vh"}}>
            <Grid container spacing={2}>
                <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center', pb:5}}>
                    <Typography variant='h3'>Some Personal Projects</Typography>
                </Grid>
                {projects.map((project) => {
                    return (
                        <Grid item xs={4} key={project.title}>
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
        </Container>
    )
};

export default ProjectPage;