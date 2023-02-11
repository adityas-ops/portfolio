import React from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Divider, Typography } from '@material-ui/core'
import { useState } from 'react'

function Cards({heading,imgLink,deploy,source}) {
    const [state, setState] = useState({
        raised: false,
        shadow: 1,
    })
    const deploy1 = ()=>{
        window.open(deploy)
    }
    const source1 = ()=>{
        window.open(source)
    }
  return (
    <>
         <Card onMouseOver={() => setState({ raised: true, shadow: 3 })}
                                onMouseOut={() => setState({ raised: false, shadow: 1 })}
                                raised={state.raised} zDepth={state.shadow}
                                style={{
                                    margin: '20px',
                                    padding: '10px',
                                    background: 'rgba(51,51,51,0.5)',                            
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                    borderRadius: '10px',
                                    boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
                                    transition: '0.3s',
                                    position: 'relative',
                                    overflow: 'initial',
                                }}>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="250"
                                    image={imgLink}
                                    />
                                <CardContent
                                    style={{
                                        // display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        flexDirection: 'column'
                                    }}
                                >
                                    <Typography
                                        variant='h6'
                                        style={{
                                            width:"100%",
                                            color: '#fff',
                                            textAlign:"center",
                                            textTransform: 'uppercase',
                                            fontWeight: '700'
                                        }}
                                    >
                                       {heading}
                                    </Typography>
                                </CardContent>
                                <Divider
                                    style={{
                                        width:"100%",
                                        color: '#fff',
                                        textAlign: 'left',
                                        textTransform: 'uppercase',
                                        fontWeight: '400',
                                        background: '#fff'

                                    }}
                                />
                                <CardActions
                                    style={{
                                        width:"90%",
                                        display: 'flex',
                                        justifyContent: 'space-evenly',
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                        margin:"auto",
                                        marginTop:"10px"

                                    }}
                                >
                                 <Button color='primary' variant="contained" onClick={deploy1}
                                    style={{
                                      color:"white",
                                      fontSize:"14px",
                                        fontWeight:"700",
                                    }}
                                 >
                                    Deploy
                                 </Button>
                                    <Button
                                     style={{
                                      color:"white",
                                      fontSize:"14px",
                                        fontWeight:"700",
                                    }}
                                     color='primary' variant="contained" onClick={source1} >
                                        GitHub
                                    </Button>
                                 </CardActions>
                               
                            </Card>
    </>
  )
}

export default Cards
