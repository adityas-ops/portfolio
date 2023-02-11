import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ScrollIntoView from "react-scroll-into-view";

const navItems = ['Home', 'About', 'Education', 'Skills','Projects', 'Contact'];
const selector = ["#home","#about","#education","#skills",'#Projects',"#contact"]


const Navbar1 = (props) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav" style={{ backgroundColor: 'rgb(42, 42, 42)' }} color='secondary' >
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"

                        sx={{ flexGrow: 1}}
                        style={{ color: '#e91e63', fontSize: '30px', fontWeight: 'bold' }}
                    >

                        <ScrollIntoView 
                        style={{
                            cursor:"pointer"
                        }}
                        selector="#home">
                            PORTFOLIO
                        </ScrollIntoView>
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'flex' }, color: '#ffffff' }}>
                        {navItems.map((item, index) => (
                              <ScrollIntoView selector={selector[index]}>
                            <Button key={item} sx={{ color: 'white', fontWeight: '600', fontSize: '16px', margin: '12px' }}>
                                {item}
                            </Button>
                            </ScrollIntoView>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

Navbar1.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Navbar1;
