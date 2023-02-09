import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { FaMailBulk, FaPhoneAlt, FaHome } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
import { Paper, Grid, Container, Typography, FormGroup, Button, Card } from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles';


const useStyles = makeStyles((theme) => ({
    Ypaper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        paddingRight: '12px',
        background: 'rgba(71,71,71,0.5)',

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

const notify = () => toast('Response Submitted Successfully ✅');
function Contact() {


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qyowdrc', 'template_f7k82nk', form.current, 'evokoXK24PDZ5TtU7')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    const item = [
        {
            icon: <FaMailBulk />,
            title: 'Email',
            text: 'goldminati@gmail.com'
        },
        {
            icon: <FaPhoneAlt />,
            title: 'Phone',
            text: '+919792855377'
        },
        {
            icon: <FaHome />,
            title: 'Address',
            text: 'Kushinagar, Uttar Pradesh'

        }
    ]
    const [state, setState] = useState({
        raised: false,
        shadow: 1,
    })
    const classes = useStyles();
    return (


        <div id='contact'
         style={{
            paddingTop:"100px",
            paddingBottom:"100px",
         }}
        >
            <Container style={{ height: 'contentfit', overflow: 'hidden' }}>
                <Typography variant='h3' className={classes.Heading} style={{ textAlign: 'center', padding: '20px' }}>Contact</Typography>
                <Grid container spacing={2} style={{ paddingTop: '50px' }}>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        {item.map((item, index) => {
                            return (
                                <Card
                                    onMouseOver={() => setState({ raised: true, shadow: 16 })}
                                    onMouseOut={() => setState({ raised: false, shadow: 1 })}
                                    raised={state.raised} zDepth={state.shadow}
                                    className={classes.Ypaper} style={{ padding: '20px', margin: '20px', display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}>
                                    <Typography style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', overflow: 'hidden' }} variant='h5' className={classes.para}>{item.icon} <Typography style={{ paddingLeft: '18px' }} variant='h5' className={classes.heading2}> {item.title}</Typography></Typography>

                                    <Typography className={classes.para} variant='h6' >{item.text}  </Typography>
                                </Card>
                            )

                        }
                        )}
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Card
                            onMouseOver={() => setState({ raised: true, shadow: 16 })}
                            onMouseOut={() => setState({ raised: false, shadow: 1 })}
                            raised={state.raised} zDepth={state.shadow}
                            className={classes.Ypaper} style={{ padding: '20px', margin: '20px' }}>
                            <Typography variant='h5' className={classes.Heading} style={{ textAlign: 'center' }}>Send Message</Typography>
                            <form ref={form} onSubmit={sendEmail}>
                                <FormGroup style={{ marginTop: '20px' }}>

                                    <input type="text" name="user_name" placeholder='Name' style={{ width: '90%', padding: '10px', margin: '10px', border: 'none', outline: 'none', background: 'rgba(42,42,42,.8)', color: 'white', borderRadius: '8px' }} />
                                </FormGroup>
                                <FormGroup>
                                    <input type="email" name="user_email" placeholder='Email' style={{ width: '90%', padding: '10px', margin: '10px', border: 'none', outline: 'none', background: 'rgba(42,42,42,.8)', color: 'white', borderRadius: '8px' }} />
                                </FormGroup>
                                <FormGroup>
                                    <textarea name="message" placeholder='Message' style={{ width: '90%', padding: '10px', margin: '10px', border: 'none', outline: 'none', background: 'rgba(42,42,42,.8)', color: 'white', borderRadius: '8px' }} />
                                </FormGroup>
                                <Button type="submit" variant="contained" color="secondary" value="Send" style={{ width: '20%', padding: '10px', margin: '10px', border: 'none', outline: 'none', marginTop: '20px' }} onClick={notify}>Send</Button>
                                <Toaster position="bottom-center"
                                    reverseOrder={false}
                                    gutter={5}
                                    containerClassName=""
                                    containerStyle={{}}
                                    toastOptions={{
                                        // Define default options
                                        className: 'tost',
                                        duration: 2000,
                                        style: {
                                            background: '#363636',
                                            color: '#fff',
                                        },

                                        // Default options for specific types
                                        success: {
                                            duration: 3000,
                                            theme: {
                                                primary: 'green',
                                                secondary: 'black',
                                            },
                                        },
                                    }} />
                            </form>

                        </Card>

                    </Grid>
                </Grid>
            </Container>

        </div>

    );
}

export default Contact;
