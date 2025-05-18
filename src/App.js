import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider, CssBaseline, Container } from '@mui/material';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

// Components
import Header from './components/Header';

// Pages
import HomePage from './pages/HomePage';
import AddStudentPage from './pages/AddStudentPage';
import EditStudentPage from './pages/EditStudentPage';

// RTL setup
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

// Create RTL theme
const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: [
      'Tahoma',
      'Arial',
      'sans-serif'
    ].join(','),
  },
});

function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Header />
          <Container sx={{ mt: 4, mb: 4 }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/add" element={<AddStudentPage />} />
              <Route path="/edit/:id" element={<EditStudentPage />} />
            </Routes>
          </Container>
        </Router>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;