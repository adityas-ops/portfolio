import React from 'react';
import video from './video.json';
import web from './web.json';
import thinking from './thinking.json';
import Lottie from "react-lottie";
import { Paper, Grid, Container, Typography } from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles';


const useStyles = makeStyles((theme) => ({
  Ypaper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: 'rgba(71,71,71,0.5)',
    borderRadius: '12px'
  },
  Heading: {
    color: '#e91e63'

  },
  heading2: {
    color: '#ec407a'
  },
  para: {
    color: 'white'
  },
  span: {
    color: '#ef5350'
  }
}));

function Service() {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: web,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const defaultOptions12 = {
    loop: true,
    autoplay: true,
    animationData: video,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const defaultOptions13 = {
    loop: true,
    autoplay: true,
    animationData: thinking,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const classes = useStyles();
  const item = [
    {
      title: 'Web Development',
      description: 'I have experience in developing websites using React, Node, Express, MongoDB, and other technologies.',
      animation: defaultOptions
    },
    {
      title: 'Photo Editing',
      description: 'I have experience in editing photos using Adobe Photoshop and Lightroom. I can edit photos for you. ☺️',
      animation: defaultOptions12
    },
    {
      title: 'Problem Solving',
      description: 'I have experience in problem solving using C++ and java. I have also participated in many coding competitions.',
      animation: defaultOptions13
    }
  ]
  return (
    <>
      <Container style={{ height: 'contentfit', overflow: 'hidden' }}>
        <Typography variant='h3' className={classes.Heading} style={{ textAlign: 'center', padding: '20px', marginTop: '80px' }}>Services</Typography>
        <Grid container spacing={2} style={{ paddingTop: '50px' }}>
          {item.map((item, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Paper className={classes.Ypaper}>
                <Lottie options={item.animation} height={200} width={200} />
                <Typography variant='h5' className={classes.heading2}>{item.title}</Typography>
                <Typography variant='body1' className={classes.para}>{item.description}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>



    </>
  )
}

export default Service