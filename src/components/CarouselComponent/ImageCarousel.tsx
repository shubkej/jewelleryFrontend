import { Box } from '@mui/material';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { SxProps, Theme } from '@mui/material';

interface ImageCarouselProps {
  images: ImageItem[];
  showArrows?: boolean;
  showThumbs?: boolean;
  autoPlay?: boolean;
  interval?: number;
  onChange?: (index: number, item: React.ReactNode) => void;
  onClickItem?: (index: number, item: React.ReactNode) => void;
  onClickThumb?: (index: number, item: React.ReactNode) => void;
  boxSx?: SxProps<Theme>; // ✅ Box wrapper styling
  imageSx?: React.CSSProperties; // ✅ Image styling
  containerSx?: SxProps<Theme>; // ✅ Optional outer carousel styling
}

interface ImageItem {
  src: string;
  alt?: string;
  caption?: string;
}
const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  showArrows = true,
  showThumbs = true,
  autoPlay = true,
  interval = 2000,
  onChange,
  onClickItem,
  onClickThumb,
  boxSx,
  imageSx,
  containerSx,
}) => {
  return (
    <Box sx={containerSx}>
      <Carousel
        showArrows={showArrows}
        showThumbs={showThumbs}
        autoPlay={autoPlay}
        interval={interval}
        infiniteLoop
        onChange={onChange}
        onClickItem={onClickItem}
        onClickThumb={onClickThumb}
      >
        {images.map((image, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              ...boxSx,
            }}
          >
            <img
              src={image.src}
              alt={image.alt || `Slide ${index + 1}`}
              style={{
                objectFit: 'cover',
                maxHeight: '100%',
                width: '100%',
                ...imageSx,
              }}
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default ImageCarousel;
