import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';

export default function ComboBox() {
  const [newsArticles, setNewsArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=637111f0eaa24dc69289b969cfd0dcd3'
        );
        const articles = response.data.articles.map((article) => ({
          label: article.title,
          url: article.url,
        }));
        setNewsArticles(articles);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching news articles:', error);
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={newsArticles}
        loading={isLoading}
        getOptionLabel={(option) => option.label}
        sx={{
          width: 280,
          backgroundColor: '#262728',
          color: 'black',
          borderRadius: '30rem',
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search by title"
            InputLabelProps={{ style: { color: 'white' } }}
            InputProps={{
              style: { color: 'white', borderRadius: '30rem' },
              classes: {
                notchedOutline: 'whiteOutline',
                focused: 'whiteFocused',
              },
            }}
          />
        )}
        onChange={(event, value) => {
          if (value && value.url) {
            window.open(value.url, '_blank');
          }
        }}
      />
    </div>
  );
}
