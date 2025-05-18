import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          نظام تسجيل الطلاب
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">
            الرئيسية
          </Button>
          <Button color="inherit" component={Link} to="/add">
            إضافة طالب
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;