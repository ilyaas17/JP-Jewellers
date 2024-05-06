import { useState } from 'react';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';

const navItems = ['Home', 'About', 'Contact'];

function DrawerAppBar(props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar component="nav" sx={{backgroundColor:'Gold', color:'black'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
          </IconButton>
          <Typography
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, fontSize:'36px', fontStyle:'italic', fontWeight:'700', color:'#ffffff'} }
          >
            JP Jewellers
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Link to={`/${item}`} key={item} style={{ textDecoration: 'none' }}>
                <Button sx={{ color: 'black' , paddingLeft:'100px', paddingRight:'40px', fontSize:'16px'}}>
                  {item}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default DrawerAppBar;