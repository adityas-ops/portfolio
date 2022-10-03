import React from 'react'
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
    img: {
        height: '100px',
        width: '100px'
    },
    para: {
        color: 'white'
    }
}));

function Skills() {

    const item = [
        {
            name: 'C',
            url: 'logos/c.png'
        },
        {
            name: 'C++',
            url: 'logos/cpp.png'
        },
        {
            name: 'Java',
            url: 'logos/java.png'
        }, {
            name: 'Python',
            url: 'logos/python.png'
        },
        {
            name: 'HTML',
            url: 'logos/html.png'
        },
        {
            name: 'CSS',
            url: 'logos/css.png'
        },
        {
            name: 'JavaScript',
            url: 'logos/js.png'
        },
        {
            name: 'React',
            url: 'logos/react.png'
        },
        {
            name: 'Material UI',
            url: 'logos/material.png'
        },
        {
            name: 'MySQL',
            url: 'logos/sql.png'
        },
        {
            name: 'GitHub',
            url: 'logos/github.png'
        },
        {
            name: 'Tailwind CSS',
            url: 'logos/talwind.png'
        }

    ]


    const classes = useStyles();
    return (


        <>
            <Container style={{ height: 'contentfit', overflow: 'hidden' }}>

                <Typography variant='h3' className={classes.Heading} style={{ textAlign: 'center', padding: '20px', marginTop: '80px' }}>Skills</Typography>

                <Grid container spacing={2} style={{ display: 'flex' }}>
                    {item.map((item) => (
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <Paper className={classes.Ypaper}>
                                <img src={item.url} alt="ph" className={classes.img} />
                                <Typography variant='h5' className={classes.para}>{item.name}</Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>

        </>
    )
}

export default Skills