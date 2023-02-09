import React from 'react'
import Lottie from "react-lottie";
import coder from './coding.json'
import Typical from 'react-typical'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Paper, Grid, Container, Typography, Button, Box } from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles';
import { NavLink } from 'react-router-dom';
import ScrollIntoView from "react-scroll-into-view";


const useStyles = makeStyles((theme) => ({
  Ypaper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: 'rgba(51,51,51,0.5)',
    zIndex: '100'
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
    color: '#ffee58'
  },
}));




function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: coder,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const icon = [
    {
      id: 1,
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/goldminati"
    },
    {
      id: 2,
      icon: <FaInstagram />,
      link: "https://www.instagram.com/aditya.0.0.8/"
    },
    {
      id: 3,
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/aditya-sharma-6645b41ab/"
    },
    {
      id: 4,
      icon: <FaTwitter />,
      link: "https://twitter.com/ADITYAOPS"
    },
  ]

  const classes = useStyles();
  return (
    <>
    <div id='home'>
      <Container style={{ height: 'contentfit', overflow: 'hidden' }}   >
        <Paper className={classes.Ypaper} elevation={3} style={{ marginTop: '200px' }}>
          <Grid container spacing={2} style={{ paddingTop: '50px' }}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Grid style={{}}>
                <Typography variant="h4" className={classes.span}>
                  <Typical loop={Infinity}
                    steps={[
                      "Hi, 👋🏻 ",
                      4000,
                      "I'm Aditya Sharma ",
                      2000,
                      "I'm a Web Developer💻 ",
                      2000,
                    ]}
                  />
                </Typography>
                <Typography variant='h6' className={classes.para} style={{ textAlign: 'center' }}>
                  “If debugging is the process of removing bugs, then programming must be the process of putting them in.”
                </Typography>
                {
                  icon.map((item) => {
                    return (
                      <Button variant="contained" target="_blank" href={item.link} color="primary" style={{ margin: '15px', textAlign: 'center' }}>
                        <Typography variant="h6" style={{ color: 'white' }}>
                          {item.icon}
                        </Typography>

                      </Button>
                    )
                  })
                }
              </Grid>
              <Box style={{ width: '100%', marginTop: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >

                <ScrollIntoView selector="#contact">
                  <Button variant="contained" color="secondary" style={{ marginRight: '20px' }}>
                    Contact Me
                  </Button>
                </ScrollIntoView>

                <Button variant="contained" color="secondary" href='Aditya-Sharma.pdf' style={{}}>
                  Resume
                </Button>


              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Lottie options={defaultOptions}

                height={400}
                width={400}
              />
            </Grid>
          </Grid>
        </Paper>
      </Container>
      </div>

    </>
  )
}

export default Home
