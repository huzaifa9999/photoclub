import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./Award.css"

export default function ActionAreaCard(porps) {
  return (
    <Card sx={{ maxWidth: 355 }} className="hue" >
      <CardActionArea>
        <CardMedia 
          component="img"
          height="140"
          image={porps.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {porps.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {porps.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}