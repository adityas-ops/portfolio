import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './nav.css';
import { Paper } from '@mui/material';

import ScrollIntoView from "react-scroll-into-view";


const drawerWidth = 280;
const navItems = ['Home', 'About', 'Education', 'Skills','Projects', 'Contact'];
const selector = ["#home","#about","#education","#skills",'#Projects',"#contact"]


const Navbar1 = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box color='primary' onClick={handleDrawerToggle} style={{ alignItems: 'center', backgroundColor: 'rgb(42, 42, 42)', height: '100%', color: 'red' }} >
            <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img className='logo' src="logo.svg" alt="" />
            </Box>
            <Divider />
            <List>
                    <ScrollIntoView selector={selector[0]}>
                    <ListItem button key={selector}>
                        <Paper elevation={3} style={{ width: '100%', textAlign: 'center', height: '40px', background: 'rgba(51,51,51,0.5)', color: 'white', fontSize: '24px' }}>
                       
                          <ListItemText>
                            {navItems[0]}
                          {console.log("clicked")}
                          </ListItemText>
                           
                        </Paper>

                    </ListItem>
                    </ScrollIntoView>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav" style={{ backgroundColor: 'rgb(42, 42, 42)' }} color='secondary' >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' }, color: 'white', fontWeight: 'bold', fontSize: '20px', textDecoration: 'none' }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"

                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
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
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, color: 'red' },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
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
