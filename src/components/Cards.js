import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345, margin:'50px', backgroundColor:'#383B3E', borderRadius:'2rem', Height:250 }}>
      <CardActionArea>
      <Typography gutterBottom variant="h5" component="div" color={"white"} align='center' padding={1} fontFamily={'roboto'} >
            Movie name
          </Typography>
        <CardMedia sx={{borderRadius:'1rem'}}
          component="img"
          height="200"
          image="https://imgs.search.brave.com/LpkyplJ7MCJ480txm4464vav3WqzZKcE6dZr48q249I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWM0LmRlcG9zaXRw/aG90b3MuY29tLzEw/MDQ4NTMvMjg2L2kv/NjAwL2RlcG9zaXRw/aG90b3NfMjg2NjI3/Ny1zdG9jay1waG90/by1kdW1teS1pbi1h/LXdpZy5qcGc"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="white">
           Wassap
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button sx={{borderRadius:'2rem', backgroundColor:'white', color:'black', left:'1rem', bottom:'5px'}} size="small" variant="contained">
          Read
        </Button>
      </CardActions>
    </Card>
  );
}
