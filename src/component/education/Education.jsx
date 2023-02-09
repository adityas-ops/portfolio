import React, { useState } from 'react'
import Lottie from "react-lottie";
import btech from './btech.json';
import high from './high1.json';
import inter from './inter1.json';
import { Paper, Grid, Container, Typography, Card } from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles';


const useStyles = makeStyles((theme) => ({
    Ypaper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        background: 'rgba(51,51,51,0.5)',
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

function Education() {
    const [state, setState] = useState({
        raised: false,
        shadow: 1,
    })
    const defaultOptions1 = {
        loop: true,
        autoplay: true,
        animationData: inter,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const defaultOptions2 = {
        loop: true,
        autoplay: true,
        animationData: high,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: btech,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const item = [
        {
            title: 'B. TECH',
            date: '(2020-2024)',
            content: ' I AM A STUDENT OF B. TECH IN COMPUTER SCIENCE ENGINEERING.I AM CURRENTLY STUDIES IN  MAHATMA JYOTIBA PHULE ROHILKHAND UNIVERSITY, BAREILLY UTTAR PRADESH',
            animation: defaultOptions
        },
        {
            title: 'INTERMEDIATE',
            date: '(2017 - 2019)',
            content: ' I HAVE PASSED INTERMEDIATE EXAMINATION FROM M.A.V.M SENINOR SECONDARY SCHOOL KASIA KUSHINAGAR UTTAR PRADESH, BOARD OF UTTAR PRADESH BOARD.',
            animation: defaultOptions1
        },
        {
            title: 'HIGH SCHOOL',
            date: '(2015 - 2017)',
            content: ' I HAVE PASSED HIGH SCHOOL EXAMINATION FROM M.A.V.M SENINOR SECONDARY SCHOOL KASIA KUSHINAGAR UTTAR PRADESH, BOARD OF UTTAR PRADESH BOARD .',
            animation: defaultOptions2
        }

    ]

    const classes = useStyles();

    return (

        <div id='education'>
            {/* <Particle /> */}
            <Container style={{ height: 'contentfit', overflow: 'hidden' }}>
                <Typography variant='h3' className={classes.Heading} style={{ textAlign: 'center', padding: '20px', marginTop: '80px' }}>Education</Typography>
                <Grid container spacing={2} style={{ paddingTop: '50px' }}>

                    {item.map((item, index) => (
                        <Grid item xs={12} sm={4} key={index}>
                            <Card onMouseOver={() => setState({ raised: true, shadow: 3 })}
                                onMouseOut={() => setState({ raised: false, shadow: 1 })}
                                raised={state.raised} zDepth={state.shadow}
                                className={classes.Ypaper}>
                                <Typography variant='h5' className={classes.heading2} style={{ display: 'flex', justifyContent: 'space-evenly', padding: '10px' }}>{item.title}
                                    <Typography variant='h6' className={classes.para}>{item.date}</Typography>
                                </Typography>
                                <Typography variant='h6' className={classes.para} style={{ textAlign: 'center', padding: '20px', paddingTop: '10px' }}>{item.content}</Typography>
                                <Lottie options={item.animation} height={200} width={200} />
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}

export default Education