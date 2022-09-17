import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './nav.css';
import { NavLink } from 'react-router-dom';


const drawerWidth = 280;
const navItems = ['Home', 'About', 'Education', 'Skills', 'Service', 'Contact'];
const Link = ["/Home", "/About", "/Education", "/Skills", "/Service", "/Contact"];
const Navbar1 = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <img className='logo' src="logo.svg" alt="" />
            <Divider />
            <List>
                {navItems.map((text, index) => (
                    <ListItem button key={text}>
                        <NavLink to={Link[index]} activeClassName="active">
                            <ListItemText primary={text} />
                        </NavLink>
                        <Divider />
                    </ListItem>

                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav" style={{ background: 'transparent', boxShadow: 'none', color: 'white' }} >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' }, color: 'white', fontWeight: 'bold' }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        ADITYA SHARMA
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' }, color: '#ffffff' }}>
                        {navItems.map((item, index) => (
                            <Button key={item} sx={{ color: 'white', fontWeight: '600', fontSize: '16px' }} component={NavLink} to={Link[index]}>
                                {item}
                            </Button>
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
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
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
