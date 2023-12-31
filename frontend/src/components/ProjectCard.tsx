"use client";
import { Box, Button, Card, CardContent, Grid, Modal, Tooltip, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
    projTitle: string,
    projThumb: string | null,
    projDesc: string,
    projTools: string,
    projCode: string | null,
    projDemo: string | null,
    projFullDesc: string
}

const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {xs:'70%', md:'50%'},
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
}

const ProjectCard = (props: Props) => {
    const router = useRouter();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true)
    };
    const handleClose = () => {
        setOpen(false)
    };

    return (
        <>
            <Card sx={{minHeight:500}}>
                <CardContent>
                    <Typography variant='h5' sx={{pb:2}}>{props.projTitle}</Typography>
                    <Typography variant='body1'>{props.projDesc}</Typography>
                    {props.projThumb ? <Box sx={{pt:2}}><img src={props.projThumb} style={{width:'100%'}}/></Box> : null}
                    <br/>
                    <Box sx={{display: 'flex', justifyContent: 'right'}}>
                        <Button variant='contained' onClick={handleOpen}>Learn More</Button>
                    </Box>
                </CardContent>
            </Card>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={modalStyle}>
                    <Typography variant='h5' sx={{pb:2}} fontSize='1.3rem'>{props.projTitle}</Typography>
                    <Typography variant='body1' fontSize='0.9rem'>{props.projFullDesc}</Typography>
                    <br/>
                    <Typography variant='subtitle1' color='text.secondary' fontSize='0.75rem'>Tools: {props.projTools}</Typography>
                    <br/>
                    <Grid container spacing={2} sx={{display: 'flex', justifyContent:'right'}}>
                        <Grid item xs={6} sx={{display:'flex', justifyContent:"center"}}>
                            {props.projCode ? 
                                <Button variant='contained' target="_blank" href={props.projCode}>Check out the Code!</Button> : 
                                <Tooltip title="Code is not public, please contact me for more info" placement="top">
                                    <span>
                                        <Button variant='contained' disabled>Check out the Code!</Button>
                                    </span>
                                </Tooltip>
                            }
                        </Grid>
                        {props.projDemo ? 
                        <Grid item xs={6} sx={{display:'flex', justifyContent:"center"}}>
                            <Button onClick={() => {props.projDemo?router.push(props.projDemo):null}}>Check out the Demo!</Button>
                        </Grid> : null}
                    </Grid>
                </Box>
            </Modal>
        </>
    )
};

export default ProjectCard;