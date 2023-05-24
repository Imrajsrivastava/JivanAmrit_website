import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

const images = [
  {
    url: 'https://www.shutterstock.com/image-photo/fresh-herbs-garden-wooden-olive-260nw-1296916552.jpg',
    title: 'Breakfast',
    width: '40%',
  },
  {
    url: 'https://thumbs.dreamstime.com/b/various-aromatic-colorful-spices-herbs-ingredients-cooking-ayurveda-treatments-169744244.jpg',
    title: 'Burgers',
    width: '30%',
  },
  {
    url: 'https://media.gettyimages.com/id/114854538/photo/ayurvedic-massage-sign-goa.jpg?s=612x612&w=0&k=20&c=I-uMIHnj_XYsoe5Uz4nKVBrLBBeNIKuy9t4MMjsTTK4=',
    title: 'Camera',
    width: '30%',
  },

  {
    url: 'https://media.gettyimages.com/id/1130648900/photo/cup-of-tea-cinnamon-sticks-anise-dried-orange-on-wooden-table.jpg?s=612x612&w=0&k=20&c=xT2qa_oK1cKOB1hfWxzxDlSeLMiy3r6Lhxr8ssaoqxg=',
    title: 'Camera',
    width: '30%',
  },

  {
    url: 'https://thumbs.dreamstime.com/b/various-aromatic-colorful-spices-herbs-ingredients-cooking-ayurveda-treatments-169744244.jpg',
    title: 'Burgers',
    width: '30%',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function Portfolio() {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}
