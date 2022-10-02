import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Stack } from '@mui/system';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

function Navi() {
  const { auth, logout,user } = useContext(AuthContext)
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1, marginBottom: 8 }}>
        <AppBar sx={{ backgroundColor: 'white', color: 'black' }} position="fixed">
          <Toolbar>
            <Typography variant="h6" component={Link} to={"/"} color={'black'} sx={{ flexGrow: 1 }}>
              Rent A Car
            </Typography>
            <Stack direction={'row'} sx={{ mr: 2 }}>
              <Button>Colors</Button>
              <Button>Brands</Button>
              <Button component={Link} to={'/postcar'}>Post Car</Button>
            </Stack>
            {
              auth ?
              <>
                 <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle sx={{ width: 32, height: 32 }} />
              </IconButton>
                <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Welcome :{user.userName}</MenuItem>
                <MenuItem onClick={()=>{logout()}}>Log Out</MenuItem>
              </Menu>
              </> 
              :
              <Stack direction={'row'} spacing={2}>
                <Button component={Link} to={"/login"} color='primary' variant='contained' startIcon={<LoginIcon />}>Login</Button>
                <Button component={Link} to={"/register"} color='inherit' startIcon={<PersonAddIcon />}>Register</Button>
              </Stack>
              
           }
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Navi