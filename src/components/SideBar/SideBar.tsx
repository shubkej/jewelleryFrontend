import React, { useState } from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { NavLink, useLocation } from 'react-router-dom';

const menuItems = [
  { label: 'Home', path: '/' },
  { label: 'Login', path: '/login' },
  { label: 'Signup', path: '/signup' },
];

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation()

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 16px',
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          LOGO
        </Typography>
        <IconButton onClick={toggleDrawer(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List>
    {menuItems.map((item, index) => {
      const isActive = location.pathname === item.path;
      return (
        <ListItem key={item.label} disablePadding>
          <ListItemButton
            component={NavLink}
            to={item.path}
            sx={{
              bgcolor: isActive ? 'lightgray' : 'transparent',
              color: isActive ? 'black' : 'inherit',
              '&:hover': {
                bgcolor: isActive ? 'gray' : 'action.hover',
              },
            }}
          >
            <ListItemIcon
              sx={{
                color: isActive ? 'black' : 'inherit',
                minWidth: 40,
              }}
            >
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        </ListItem>
    );
  })}
</List>
    </Box>
  );

  return (
    <Box>
      <IconButton onClick={toggleDrawer(true)} sx={{ color: 'inherit' }}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Box>
  );
};

export default SideBar;
