import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import Grid from '@mui/material/Grid';
import Cards from './components/Cards';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Navbar />
      <div
        style={{
          paddingLeft: '4rem',
          paddingRight: '4rem',
          backgroundColor: '#0D0D0D',
          minHeight: '100vh',
          color: 'white',
        }}
      >
        <Typography
          variant="h2"
          padding={5}
          textAlign={'start'}
          fontFamily="sans-serif"
          fontWeight={500}
          fontSize="5.5vw"
        >
          Top News
        </Typography>

        <Divider
          variant="middle"
          sx={{
            width: '100%',
            height: '1px',
            backgroundColor: '#262728',
            margin: '0 auto',
            marginBottom: '2rem',
          }}
        />
        <Typography
          variant="h4"
          fontSize="30px"
          fontFamily="sans-serif"
          fontWeight={700}
          padding={2}
        >
          Filter results
        </Typography>
       
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <Cards />
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default App;
