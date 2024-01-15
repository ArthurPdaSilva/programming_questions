import { ImageList, ImageListItem, ImageListItemBar, Typography } from '@mui/material';

import images from '../../../../../../db/images';

export default function CarouselComponent() {
  return (
    <div>
      <Typography color="secondary" variant="h3" component="h2" align="center">
        Nóize ❤️
      </Typography>
      <ImageList sx={{ width: 1500, height: 450 }}>
        {images.map((item) => {
          return (
            <ImageListItem key={item.id}>
              <img srcSet={item.link} width={250} height={200} alt={item.title} loading="lazy" />
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
