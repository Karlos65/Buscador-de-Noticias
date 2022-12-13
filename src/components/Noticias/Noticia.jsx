import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
//import { useNavigate } from 'react-router-dom';
const Noticia = ({
    noticia
    }) => {
    const onCardClick = () => {
        window.open (noticia.url);
    };
      //console.log(noticia);
    return (
      <Card sx={{ background:'#040405', width: 800, height: 140, float: 'center', m: 2 }}>
        <CardActionArea onClick={onCardClick}>
        <CardMedia sx={{ width: 140, height: 140, float: 'right' }}
          component="img"
          
          image={noticia.urlToImage}
          alt={noticia.title}
        />
        <CardContent>
          
          <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: 'lg', color: '#0703fc' }}>
            {noticia.title}
          </Typography>
          <Typography variant="body2" sx={{ color: '#e6e6ed' }}>
            Origen: {noticia.author} 
          </Typography>
          <Typography variant="body2" sx={{ color: '#f1f50a' }}>
            Publicado el: {' '}
            {new Date(noticia.publishedAt).getDate()} {'/'}
            {new Date(noticia.publishedAt).getMonth() +1} {'/'}
            {new Date(noticia.publishedAt).getFullYear()} {' '} {'a las '}
            {new Date(noticia.publishedAt).getHours()+3}{':'}
            {new Date(noticia.publishedAt).getMinutes()} {' hs.'}
          </Typography>

        </CardContent>
        </CardActionArea>
      </Card>
      
  )
}

export const ListaNoticias = ({ noticias }) => {
    return noticias.map((noticia) => {
        return <Noticia noticia={noticia}/>
    })

}

   export default Noticia;
