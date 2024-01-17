import { ImageList, ImageListItem, ImageListItemBar, Typography } from '@mui/material';
import images from '../../../db/images';

export default function Carousel() {
  return (
    <div>
      <Typography color="secondary" variant="h3" component="h2" align="center">
        Nóize ❤️
      </Typography>
      <ImageList sx={{ width: 1100, height: 400 }}>
        {images.map((item) => {
          return (
            <ImageListItem key={item.id}>
              <img srcSet={item.link} alt={item.title} width={200} loading="lazy" />
              <ImageListItemBar
                sx={{
                  background:
                    'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' + 'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                  fontSize: '3rem',
                }}
                title={<h1>{item.title}</h1>}
                position="top"
              />
            </ImageListItem>
          );
        })}
      </ImageList>
    </div>
  );
}
