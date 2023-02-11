import React from 'react'
import { Box, Container, Grid, Typography } from '@material-ui/core'
import Cards from './Cards'

function Projects() {

  const Project = [
    {
      heading: 'Macc. Essential',
      imgLink: 'img/ecom.png',
      deploy: 'https://aditya-e-commerce.vercel.app/',
      source: 'https://github.com/adityas-ops/e-commerce'
    },
    {
      heading: 'Chat GPT 2.0',
      imgLink: 'img/chatGpt.png',
      deploy: 'https://chat-gpt-adityas-ops.vercel.app/',
      source: 'https://github.com/adityas-ops/chat-gpt'
    },
    {
      heading: 'Resume Builder',
      imgLink: 'img/resume.png',
      deploy: 'https://resumeadi.vercel.app/',
      source: 'https://github.com/adityas-ops/resumeadi'
    },
    {
      heading: 'PortFolio',
      imgLink: 'img/portfolio.png',
      deploy: 'https://portfolio-aditya-ten.vercel.app/',
      source: 'https://github.com/adityas-ops/portfolio'
    }

  ]

  return (
    <div id='Projects'>
    <Container style={{ height: 'contentfit', overflow: 'hidden' }}>
      <Box
        style={{
        width:"100%",
        }}
      >
      <Typography
        variant='h3'
        style={{
          color: '#e91e63',
          textAlign: 'center',
          textTransform: 'uppercase',
          fontWeight:"700",
          marginTop:"150px"
          ,textDecoration:'underline'
        }}

      >
        Projects
      </Typography>
      <Box 
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        style={{
        }}
      >
       <Grid container spacing={3}>
        {Project.map((item) => (
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Cards
              heading={item.heading}
              imgLink={item.imgLink}
              deploy={item.deploy}
              source={item.source}
            />
            </Grid>
        ))}
       </Grid>
      </Box>
      </Box>
    </Container>
    </div>
  )
}

export default Projects
