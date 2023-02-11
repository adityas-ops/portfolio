import React, { useState } from 'react'
import Lottie from "react-lottie";
import coder from './coding.json'
import Typical from 'react-typical'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Paper, Grid, Container, Typography, Button, Box} from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles';
import ScrollIntoView from "react-scroll-into-view";
import MdAdd from '@mui/icons-material/Add';
import {FloatingMenu,MainButton,ChildButton,Directions} from "react-floating-button-menu";
import MdClose from "@material-ui/icons/Clear";
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';

const useStyles = makeStyles((theme) => ({
  Ypaper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: 'rgba(51,51,51,0.5)',
    zIndex: '100'
  },
  Heading: {
    color: '#e91e63',
    textTransform: 'uppercase',
    fontWeight:"700"

  },
  heading2: {
    color: '#ec407a'
  },
  para: {
    color: 'white'
  },
  span: {
    color: 'rgba(64,80,181)',
    fontWeight: '700'

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
  const [isOpen, setIsOpen] = useState(false);
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
                      2000,
                      "I'm Aditya Sharma.",
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
                  <Button variant="contained" color="primary" style={{ marginRight: '20px' }}>
                    Contact Me
                  </Button>
                </ScrollIntoView>

                <Button variant="contained" color="primary" href='Aditya-Sharma-resume.pdf'>
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
      <Box 
       sx={{
        zIndex:'100',
        margin: 0,
    top: 'auto',
    right: 10,
    bottom: 10,
    left: 'auto',
    position: 'fixed',
        display:{
          xs:'flex',
          sm:'none',
          md:'none',
          lg:'none'
        },
       }}
      >
       <FloatingMenu
        slideSpeed={500}
        isOpen={isOpen}
        spacing={20}
        direction={Directions.Up}
        className="menu-btn"
      >
        <MainButton
          isOpen={isOpen}
          iconResting={<MdAdd style={{ fontSize: 25,color:"white" }} />}
          iconActive={<MdClose style={{ fontSize: 25, color:"white" }} />}
          background="#e91e63"
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
          size={56}
        />
            <ChildButton
          icon={<HomeOutlinedIcon style={{ color:"white" }} />}
          background="#e91e63"
          onClick={
            () => {
              setIsOpen((prev) => !prev);
              window.location.href = '#home';
            }
          }

          size={40}
        />
          <ChildButton
          icon={<InfoOutlinedIcon style={{ color:'white' }} />}
          background="#e91e63"
          size={40}
          onClick={
            () => {
              setIsOpen((prev) => !prev);
              window.location.href = '#about';
            }
          }
        />
        <ChildButton
          icon={<SchoolOutlinedIcon style={{color:"white"}}/>}
          background="#e91e63"
          size={40}
          onClick={
            ()=>{
              setIsOpen((prev)=>!prev);
              window.location.href='#education';
            }
          }
        />
        <ChildButton
          icon={<CodeOutlinedIcon style={{color:"white"}}/>}
          background="#e91e63"
          size={40}
          onClick={
            ()=>{
              setIsOpen((prev)=>!prev);
              window.location.href='#skills';
            }
          }
        />
        <ChildButton
          icon={<AccountTreeOutlinedIcon style={{color:"white"}}/>}
          background="#e91e63"
          size={40}
          onClick={
            ()=>{
              setIsOpen((prev)=>!prev);
              window.location.href='#Projects';
            }
          }
        />
        <ChildButton
          icon={<ContactPageOutlinedIcon style={{color:"white"}}/>}
          background="#e91e63"
          size={40}
          onClick={
            ()=>{
              setIsOpen((prev)=>!prev);
              window.location.href='#contact';
            }
          }
        />
      </FloatingMenu>
      </Box>

    </>
  )
}

export default Home
