import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Logout from '@mui/icons-material/Logout';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { NavLink, useNavigate } from 'react-router-dom';
import SideBar from '../components/SideBar/SideBar';
import { Badge } from '@mui/material';
import { useSelector } from 'react-redux';
import { totalItemCount } from '../redux/Features/Cart/CartSlice';

const pages = ['Home', 'Product', 'Cart', 'Login', 'SignUp'];
const settings = [
  { ele: 'Profile', icon: <Avatar />, to: '/profile' },
  { ele: 'Account', icon: <Avatar />, to: '/account' },
  { ele: 'Logout', icon: <Logout />, to: '/login' },
];

function Header() {
  const cartItemTotal = useSelector(totalItemCount);
  const [anchorEl, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const isLoggedIn = Boolean(localStorage.getItem('authToken'));

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorElUser(null);
  };
  const navigate = useNavigate();
  const handleMenuClick = (setting: { ele: string; to: string }) => {
    handleClose();

    switch (setting.ele) {
      case 'Logout':
        localStorage.removeItem('authToken');
        navigate('/login');
        break;
      case 'Profile':
        navigate(setting.to);
        break;
      case 'Account':
        navigate(setting.to);
        break;
      default:
        navigate(setting.to);
        break;
    }
  };

  return (
    <AppBar position="static" sx={{ bgcolor: 'black' }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <SideBar />
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages
              .filter((page) => {
                if (isLoggedIn && (page === 'Login' || page === 'SignUp'))
                  return false;

                // if (!isLoggedIn && (page === 'Cart'))
                //   return false;

                return true;
              })
              .map((page) => (
                <NavLink
                  key={page}
                  to={`/${
                    page.toLowerCase() !== 'home' ? page.toLowerCase() : ''
                  }`}
                  style={({ isActive }) => ({
                    textDecoration: 'none',
                    color: isActive ? 'red' : 'white',
                    fontWeight: isActive ? 'bold' : 'normal',
                    padding: '8px 16px',
                  })}
                >
                  <Typography sx={{ textTransform: 'capitalize' }}>
                    {page}
                  </Typography>
                </NavLink>
              ))}
          </Box>
          {isLoggedIn ? (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 3,
              }}
            >
              <Box
                sx={{
                  display: { xs: 'none', sm: 'flex' },
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 2,
                }}
              >
                <Badge>
                  <FavoriteBorderOutlinedIcon
                    onClick={() => navigate('/whilshlist')}
                    sx={{
                      fontSize: '30px',
                      color: 'white',
                      '&:hover': {
                        color: 'red',
                      },
                    }}
                  />
                </Badge>
                <Badge color="error" badgeContent={cartItemTotal || 0}>
                  <ShoppingCartOutlinedIcon
                    onClick={() => navigate('/cart')}
                    sx={{
                      fontSize: '30px',
                      cursor: 'pointer',
                      color: 'white',
                      '&:hover': {
                        color: 'red',
                      },
                    }}
                  />
                </Badge>
              </Box>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://images.pexels.com/photos/5112926/pexels-photo-5112926.jpeg"
                  />
                </IconButton>
              </Tooltip>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={Boolean(anchorEl)}
                onClose={handleClose}
                onClick={handleClose}
                slotProps={{
                  paper: {
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 1.5,
                      '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      '&::before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                      },
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting.to}
                    onClick={() => handleMenuClick(setting)}
                  >
                    {setting.icon} {setting.ele}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <Box></Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
