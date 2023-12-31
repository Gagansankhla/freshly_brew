import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid, TextField } from '@mui/material';
import axios from 'axios';

export default function NewsSection({ category }) {
  const [newsList, setNewsList] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=637111f0eaa24dc69289b969cfd0dcd3`;

    if (category) {
      apiUrl += `&category=${category}`;
    }

    if (searchKeyword) {
      apiUrl += `&q=${searchKeyword}`;
    }

    axios.get(apiUrl)
      .then(response => {
        setNewsList(response.data.articles || []);
      })
      .catch(error => {
        console.error('Error fetching news articles:', error);
      });
  }, [category, searchKeyword]);

  return (
    <>
    <div>
    <TextField
  sx={{
    backgroundColor: 'white',
    color: 'white',
    borderRadius: '30rem',
    width: '380px',
    '& .MuiOutlinedInput-root': {
      borderRadius: '30rem',
    },
  }}
  label="Search"
  variant="outlined" // Use the outlined variant
  color="primary"
  value={searchKeyword}
  onChange={(e) => setSearchKeyword(e.target.value)}
  style={{ marginBottom: '20px' }}
/>
</div>

    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'center' }}>
      
      {newsList.map(article => (
        <Card key={article.url} sx={{ position: 'relative', maxWidth: 345, minWidth: 345, minHeight: 550, margin: '20px', backgroundColor: '#383B3E', borderRadius: '2rem' }}>
          <CardActionArea>
            <Typography gutterBottom variant="h5" component="div" color={"white"} align='left' padding={2} fontFamily={'roboto'} >
              {article.title}
            </Typography>
            <CardMedia
              component="img"
              height="200"
              width="100%"
              image={article.urlToImage || 'https://via.placeholder.com/200'}
              alt={article.title}
              sx={{ borderRadius: '1rem', display: 'block', alignItems: 'center', justifyContent: 'center', mx: 'auto' }}
            />
            <CardContent>
              <Typography variant="body2" color="white">
                {article.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions sx={{ position: 'absolute', left: '1rem', bottom: '5px' }}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <Button sx={{ borderRadius: '2rem', backgroundColor: 'white', color: 'black' }} size="small" variant="contained">
                Read
              </Button>
            </a>
          </CardActions>
        </Card>
      ))}
    </div>
    </>
  );
}
