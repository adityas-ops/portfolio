import React from 'react'
import { Paper, Grid, Container, Typography, Button } from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles';
import { FaGithub, FaHackerrank } from 'react-icons/fa';
import { SiLeetcode, SiCodeforces, SiCodechef, SiGeeksforgeeks } from 'react-icons/si';
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
    para: {
        color: 'white'
    },
    span: {
        color: '#ef5350'
    }
}));




function About() {

    const classes = useStyles();
    const icon = [
        {
            id: 1,
            icon: <FaGithub />,
            link: "https://github.com/adityas-ops",
            name: "Github"
        },
        {
            id: 2,
            icon: <SiLeetcode />,
            link: "https://leetcode.com/aditya-ops/",
            name: "Leetcode"
        },
        {
            id: 3,
            icon: <SiCodeforces />,
            link: "https://codeforces.com/profile/adityaops",
            name: "Codeforces"
        },
        {
            id: 4,
            icon: <SiCodechef />,
            link: "https://www.codechef.com/users/goldminati2",
            name: "Codechef"
        },
        {
            id: 5,
            icon: <FaHackerrank />,
            link: "https://www.hackerrank.com/adityaops",
            name: "Hackerrank"
        },
        {
            id: 6,
            icon: <SiGeeksforgeeks />,
            link: "https://auth.geeksforgeeks.org/user/adityasharma20cs08",
            name: "Geeksforgeeks"
        }


    ]

    return (
        <>
            {/* <Particle /> */}
            <Container style={{ height: 'contentfit', paddingTop: '100px', overflow: 'hidden', marginBottom: '0px', paddingBottom: '0px' }} >
                <Grid container spacing={2} style={{ paddingTop: '100px' }}>
                    <Grid item xs={12} sm={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Paper elevation={3} className={classes.Ypaper} >
                            <Typography variant='h3' className={classes.Heading} style={{ textAlign: 'center', padding: '20px' }}>About Me</Typography>
                            <Typography variant='h6' className={classes.para} color='theme.palette.text.primary' style={{ textAlign: 'center', padding: '20px', paddingTop: '10px' }}>I am a <span className={classes.Heading} >Full Stack Web Developer</span>  with a background in Computer Science. I have a passion for learning and creating new things. I am currently looking for a position where I can utilize my skills and grow as a developer.</Typography>
                            {
                                icon.map((item) => {
                                    return (
                                        <Button href={item.link} target="_blank" style={{ margin: '10px' }} variant="contained" color="primary" startIcon={item.icon}>{item.name}</Button>
                                    )
                                }
                                )

                            }
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Paper className={classes.Ypaper} elevation={3} style={{ height: '420px', width: '390px', display: 'flex', alignItems: "center", justifyContent: "center" }}>
                            <img src='aditya.jpg' alt='aditya' style={{ width: '350px', height: '380px',objectFit:'cover' }} />
                        </Paper>
                    </Grid>


                </Grid>
            </Container>


        </>
    )
}

export default About
