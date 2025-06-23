import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  IconButton,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/Features/Cart/CartSlice';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

const ProductCard = ({ product }: any) => {
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Card sx={{ position: 'relative', borderRadius: '10px', minWidth: 275 }}>
      <Box sx={{ position: 'absolute', top: 5, right: 5, zIndex: 10 }}>
        <IconButton onClick={handleFavoriteToggle}>
          {isFavorite ? (
            <FavoriteOutlinedIcon color="error" />
          ) : (
            <FavoriteBorderIcon color="action" />
          )}
        </IconButton>
      </Box>

      <Link to={`/productDetails/${product?._id}`}>
        <CardMedia
          component="img"
          height="220"
          image={product?.image?.[0]}
          alt={product?.title}
          sx={{
            objectFit: 'contain',
            p: 2,
            '&:hover': { opacity: 0.9 },
          }}
        />
      </Link>

      <CardContent>
        <Typography
          variant="subtitle1"
          noWrap
          fontWeight={600}
          color="text.primary"
        >
          {product?.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {product?.description}
        </Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={2}
        >
          <Typography variant="subtitle2" color="text.primary" fontWeight="500">
            ${product?.price}
          </Typography>
        </Box>
        <ButtonComponent
          text="Add to Cart"
          variant="contained"
          sx={{
            mt: 2,
            width: '100%',
            bgcolor: 'black',
            '&:hover': { opacity: 0.7 },
          }}
          onClick={() => dispatch(addToCart({ ...product, quantity: 1 }))}
        />
      </CardContent>
    </Card>
  );
};

export default ProductCard;
