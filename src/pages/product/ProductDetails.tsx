import { lazy, Suspense, useEffect, useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  Rating,
  Paper,
  Container,
  Skeleton,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getProductById,
  getRecommendedProduct,
  getSimilarProduct,
} from '../../redux/Features/Product/ProductThunk';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import { addToCart } from '../../redux/Features/Cart/CartSlice';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ProductCardSkeleton from '../../components/ProductCard/ProductCardSkeleton';
import ImageCarousel from '../../components/CarouselComponent/ImageCarousel';
import { images } from '../../utils/constant';

const ProductCard = lazy(
  () => import('../../components/ProductCard/ProductCard'),
);
const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const handleChange = (index: number) =>
    console.log('Slide changed to', index);
  const handleClickItem = (index: number) => console.log('Clicked item', index);
  const handleClickThumb = (index: number) =>
    console.log('Clicked thumbnail', index);

  const { data: product, isLoading } = useSelector(
    (state: any) => state.productDetails,
  );
  const { recommendedProducts, loading } = useSelector(
    (state: any) => state.recommendedProduct,
  );
  const { similarProduct, loader } = useSelector(
    (state: any) => state.similarProduct,
  );

  const [mainImage, setMainImage] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      dispatch(getProductById(id));
      dispatch(getRecommendedProduct(id));
      dispatch(getSimilarProduct(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (product?.image?.length > 0) {
      setMainImage(product.image[0]);
    }
  }, [product]);

  const renderProductGrid = (products: any[], loading: boolean) =>
    loading
      ? Array.from({ length: 4 }).map((_, i) => (
          <Grid key={i} size={{ xs: 12, sm: 6, md: 3 }}>
            <ProductCardSkeleton />
          </Grid>
        ))
      : products?.map((item: any, i: number) => (
          <Grid key={i} size={{ xs: 12, sm: 6, md: 3 }}>
            <Suspense fallback={<ProductCardSkeleton />}>
              <ProductCard product={item} />
            </Suspense>
          </Grid>
        ));

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4} mt={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper elevation={3} sx={{ p: 2 }}>
            {isLoading ? (
              <Skeleton
                variant="rectangular"
                animation="pulse"
                sx={{ borderRadius: 1, minHeight: { xs: 300, md: 400 } }}
              />
            ) : (
              mainImage && (
                <Box
                  component="img"
                  src={mainImage}
                  alt="Main Product"
                  sx={{
                    width: '100%',
                    maxHeight: { xs: 300, md: 400 },
                    objectFit: 'contain',
                    borderRadius: 2,
                  }}
                />
              )
            )}
          </Paper>
          <Box display="flex" justifyContent="center" mt={2} gap={2}>
            {product?.image?.map((img: string, index: number) => (
              <Box
                key={index}
                component="img"
                src={img}
                alt={`Thumbnail ${index}`}
                onClick={() => setMainImage(img)}
                onMouseEnter={() => setMainImage(img)}
                sx={{
                  minWidth: { xs: 40, sm: 60 },
                  maxWidth: { xs: 40, sm: 60 },
                  height: { xs: 40, sm: 60 },
                  objectFit: 'cover',
                  cursor: 'pointer',
                  borderRadius: 1,
                  border:
                    mainImage === img ? '2px solid red' : '1px solid #ccc',
                  transition: '0.3s',
                }}
              />
            ))}
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} sx={{ color: 'white' }}>
          {loading ? (
            <>
              <Skeleton
                sx={{ bgcolor: 'grey.800', mt: -2.3 }}
                variant="text"
                width="80%"
                height={80}
                animation="wave"
              />
              <Skeleton
                sx={{ bgcolor: 'grey.800', mb: 2 }}
                variant="rectangular"
                width={120}
                height={30}
                animation="wave"
              />
              <Skeleton
                sx={{ bgcolor: 'grey.800' }}
                variant="text"
                width="40%"
                height={30}
                animation="wave"
              />
              <Skeleton
                sx={{ bgcolor: 'grey.800' }}
                variant="text"
                width="100%"
                height={60}
                animation="wave"
              />

              <Box mt={1.2}>
                {[...Array(6)].map((_, i) => (
                  <Skeleton
                    sx={{ bgcolor: 'grey.800' }}
                    key={i}
                    variant="text"
                    width="60%"
                    height={25}
                    animation="wave"
                  />
                ))}
              </Box>

              <Box mt={4}>
                <Skeleton
                  sx={{ bgcolor: 'grey.800' }}
                  variant="rectangular"
                  width="100%"
                  height={50}
                  animation="wave"
                />
              </Box>
            </>
          ) : (
            <>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontWeight: 'bold',
                  fontSize: { xs: 30, sm: 40 },
                  textTransform: 'capitalize',
                }}
              >
                {product?.title}
              </Typography>
              <Rating
                name="read-only"
                value={product?.rating}
                precision={0.1}
                readOnly
              />
              <Typography variant="h5" color="primary" gutterBottom>
                ₹{product?.price}
              </Typography>

              <Typography
                variant="body1"
                gutterBottom
                sx={{ textTransform: 'capitalize' }}
              >
                {product?.description}
              </Typography>
              <Box mt={2}>
                <Typography variant="body1">SKU: {product?.sku}</Typography>
                <Typography variant="body1">
                  Weight: {product?.weight}g
                </Typography>
                <Typography variant="body1">
                  Purity: {product?.purity}
                </Typography>
                <Typography variant="body1">
                  Material: {product?.material}
                </Typography>
                <Typography variant="body1">Brand: {product?.brand}</Typography>
                <Typography variant="body1">
                  Gender: {product?.gender}
                </Typography>
                <Typography variant="body1">
                  Stock:{' '}
                  {product?.inStock > 0
                    ? `${product?.inStock} available`
                    : 'Out of stock'}
                </Typography>
              </Box>
              <Box mt={4}>
                <ButtonComponent
                  text="Add to Cart"
                  variant="contained"
                  sx={{
                    mt: 2,
                    width: '100%',
                    bgcolor: 'white',
                    color: 'black',
                    fontWeight: 'bold',
                    '&:hover': { opacity: 0.7 },
                  }}
                  onClick={() =>
                    dispatch(addToCart({ ...product, quantity: 1 }))
                  }
                />
              </Box>
            </>
          )}
        </Grid>
      </Grid>

      <Box>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            py: { xs: 4, md: 6 },
            color: 'white',
            fontSize: { xs: '16px', md: '25px' },
            textAlign: 'center',
            textTransform: 'uppercase',
          }}
        >
          Similar Products
          <ArrowOutwardIcon sx={{ fontSize: '25px', ml: 1 }} />
        </Typography>
      </Box>
      <Grid container spacing={{ xs: 2, md: 3 }} sx={{ pb: 8 }}>
        {renderProductGrid(similarProduct, loader)}
      </Grid>

      <ImageCarousel
        boxSx={{ height: '500px' }}
        images={images}
        onChange={handleChange}
        onClickItem={handleClickItem}
        onClickThumb={handleClickThumb}
      />
      <Box>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            py: { xs: 4, md: 6 },
            color: 'white',
            fontSize: { xs: '16px', md: '25px' },
            textAlign: 'center',
            textTransform: 'uppercase',
          }}
        >
          Recommended Products
          <ArrowOutwardIcon sx={{ fontSize: '25px', ml: 1 }} />
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} sx={{ pb: 4 }}>
          {renderProductGrid(recommendedProducts, loading)}
        </Grid>
      </Box>
    </Container>
  );
};

export default ProductDetails;
