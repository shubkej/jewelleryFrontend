import { Box, Chip, Container, Grid, Typography } from '@mui/material';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import SwapVertOutlinedIcon from '@mui/icons-material/SwapVertOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import axios from 'axios';
import ProductCardSkeleton from '../../components/ProductCard/ProductCardSkeleton';

import { lazy, Suspense, useEffect, useState } from 'react';

const ProductCard = lazy(
  () => import('../../components/ProductCard/ProductCard'),
);

const Product = () => {
  const [products, setproducts] = useState<any>([]);
  const [loading, setLoading] = useState<any>(true);

  const fetch = async () => {
    try {
      setLoading(true);
      const res = await axios.get('https://dummyjson.com/products');
      setproducts(res.data.products);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  const handleFilter = () => {
    alert('You clicked the handleFilter');
  };
  const handleSorting = () => {
    alert('You clicked the handleSorting.');
  };

  return (
    <Container maxWidth="lg">
      <Typography sx={{ pt: { xs: 2, sm: 5 }, color: 'white' }} variant="h5">
        Products (4841 results)
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginY: '15px',
          color: 'white',
        }}
      >
        <Chip
          onClick={handleFilter}
          variant="outlined"
          icon={<FilterAltOutlinedIcon />}
          label="Filter"
          deleteIcon={<KeyboardArrowDownOutlinedIcon />}
          onDelete={handleFilter}
          sx={{
            fontSize: { xs: '14px', sm: '18px' },
            padding: { xs: '0 5px', md: '0 20px' },
            height: '35px',
            color: 'white',
            '& .MuiChip-deleteIcon': {
              color: 'white',
            },
          }}
        />

        <Chip
          onClick={handleFilter}
          variant="outlined"
          icon={<SwapVertOutlinedIcon />}
          label="Sort By"
          deleteIcon={<KeyboardArrowDownOutlinedIcon />}
          onDelete={handleSorting}
          sx={{
            fontSize: { xs: '14px', sm: '18px' },
            padding: { xs: '0 5px', md: '0 20px' },
            height: '35px',
            color: 'white',
            '& .MuiChip-deleteIcon': {
              color: 'white',
            },
          }}
        />
      </Box>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        sx={{ pb: 10 }}
      >
        {loading
          ? Array.from({ length: 8 }).map((_, index) => (
              <Grid key={index} size={{ xs: 12, sm: 4, md: 3 }}>
                <ProductCardSkeleton />
              </Grid>
            ))
          : products.map((product: any, index: number) => (
              <Grid key={index} size={{ xs: 12, sm: 4, md: 3 }}>
                <Suspense fallback={<ProductCardSkeleton />}>
                  <ProductCard product={product} />
                </Suspense>
              </Grid>
            ))}
      </Grid>
    </Container>
  );
};

export default Product;
