import { Box, Container, Grid, Typography, Pagination } from '@mui/material';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import axios from 'axios';
import ProductCardSkeleton from '../../components/ProductCard/ProductCardSkeleton';
import { lazy, Suspense, useCallback, useEffect, useState } from 'react';
import SortMenu from '../../components/MenuItem/SortMenu';
import FiltersPanel from '../../components/MenuItem/FiltersPanel';
import { OPTION as options } from '../../utils/constant';
import { getProduct } from '../../redux/Features/Product/ProductThunk';
import { useDispatch, useSelector } from 'react-redux';

const ProductCard = lazy(
  () => import('../../components/ProductCard/ProductCard'),
);

interface Option {
  _id: string;
  name: string;
}

interface Category {
  _id: string;
  name: string;
  options: Option[];
}

type FilterItem = {
  categoryId: string;
  subcategoryIds: string[];
};
type FiltersArray = FilterItem[];

const Product = () => {
  const dispatch = useDispatch();
  const {
    data: products,
    isLoading,
    pagination,
  } = useSelector((state: any) => state.product);

  const [categoriesList, setCategoriesList] = useState<Category[]>([]);
  const [currentFilters, setCurrentFilters] = useState<
    Record<string, string[]>
  >({});
  const [sortOption, setSortOption] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchList = async () => {
      try {
        const res = await axios.get(
          'http://localhost:4500/api/category/getCategoryListWithSubCategory',
        );
        setCategoriesList(res.data.data);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    };
    fetchList();
  }, []);

  const fetchProducts = useCallback(async () => {
    const categoryIds = Object.keys(currentFilters);
    const subCategoryIds = Object.values(currentFilters).flat();

    const params: any = {
      page,
      limit: 10,
      category: categoryIds.join(','),
      subCategory: subCategoryIds.join(','),
    };

    if (sortOption) params.sort = sortOption;

    await dispatch(getProduct(params));
  }, [currentFilters, sortOption, page]);

  useEffect(() => {
    if (categoriesList.length) {
      fetchProducts();
    }
  }, [categoriesList, fetchProducts]);

  const handleFilterChange = (filters: FiltersArray) => {
    const filtersRecord: Record<string, string[]> = {};
    filters.forEach(({ categoryId, subcategoryIds }) => {
      filtersRecord[categoryId] = subcategoryIds;
    });
    setCurrentFilters(filtersRecord);
    setPage(1);
  };

  const handleSort = (option: any) => {
    let sort = '';
    switch (option.label) {
      case 'Low to High':
        sort = 'price_asc';
        break;
      case 'High to Low':
        sort = 'price_desc';
        break;
      case 'A to Z':
        sort = 'name_asc';
        break;
      case 'Z to A':
        sort = 'name_desc';
        break;
      default:
        sort = '';
    }
    setSortOption(sort);
    setPage(1); // reset to page 1
  };

  return (
    <Container maxWidth="lg">
      <Typography sx={{ pt: { xs: 2, sm: 5 }, color: 'white' }} variant="h5">
        Products ({pagination.totalProducts} results)
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
        <FiltersPanel
          onChange={handleFilterChange}
          categoriesList={categoriesList}
        />
        <SortMenu
          label="Sort By"
          options={options}
          onSelect={handleSort}
          icon={<FilterAltOutlinedIcon />}
          deleteIcon={<KeyboardArrowDownOutlinedIcon />}
          sx={{ bgcolor: 'transparent', color: 'white' }}
        />
      </Box>

      <Grid container spacing={{ xs: 2, md: 3 }} sx={{ pb: 4 }}>
        {isLoading
          ? Array.from({ length: pagination.totalProducts || 4 }).map((_, index) => (
              <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
                <ProductCardSkeleton />
              </Grid>
            ))
          : products?.map((product: any, index: number) => (
              <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
                <Suspense fallback={<ProductCardSkeleton />}>
                  <ProductCard product={product} />
                </Suspense>
              </Grid>
            ))}
      </Grid>

      {pagination.totalPages > 1 && (
        <Box display="flex" justifyContent="center" mt={4} mb={6}>
          <Pagination
            count={pagination.totalPages}
            page={pagination.currentPage}
            onChange={(_, value) => setPage(value)}
            color="primary"
            sx={{
              '& .MuiPaginationItem-root': { color: 'white' },
            }}
          />
        </Box>
      )}
    </Container>
  );
};

export default Product;
