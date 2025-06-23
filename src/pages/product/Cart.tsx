import {
  Box,
  Grid,
  Typography,
  IconButton,
  Button,
  Select,
  MenuItem,
  TextField,
  Divider,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Container,
} from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeItem,
  totalItemCount,
  totalPriceCount,
  updateItem,
} from '../../redux/Features/Cart/CartSlice';
import { RootState } from '../../redux/App/Store';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalPrice = useSelector(totalPriceCount);
  const totalQuantity = useSelector(totalItemCount);

  const handleUpdateQuantity = (id: number, quantity: number) => {
    if (quantity >= 1) {
      dispatch(updateItem({ id, quantity }));
    }
  };

  return (
    <Container
      maxWidth={'lg'}
      sx={{color: 'white', py: 5 }}
    >
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Box
            display="flex"
            justifyContent="space-between"
            pb={2}
            mb={2}
            borderBottom={1}
          >
            <Typography variant="h5" fontWeight="bold">
              Shopping Cart
            </Typography>
            <Typography variant="h5" fontWeight="bold">
              {totalQuantity} Items
            </Typography>
          </Box>

          {cartItems.length === 0 ? (
            <Typography>Your cart is empty!</Typography>
          ) : (
            cartItems.map((item: any) => (
              <Card key={item.id} sx={{ display: 'flex', mb: 2 }}>
                <CardMedia
                  component="img"
                  image={item.image[0]}
                  alt={item.title}
                  sx={{height:120, width: 120, objectFit: 'contain',p:2 }}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <CardContent sx={{ flex: '1 0 auto', pb: 1 }}>
                    <Typography variant="caption" color="textSecondary">
                      {item.sku}
                    </Typography>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography variant="h6" fontWeight="bold">
                        {item.title}
                      </Typography>
                      <Box display="flex" alignItems="center">
                        <IconButton
                          size="small"
                          onClick={() =>
                            handleUpdateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          <Add fontSize="small" />
                        </IconButton>
                        <Typography sx={{ mx: 1 }}>{item.quantity}</Typography>
                        <IconButton
                          size="small"
                          onClick={() =>
                            handleUpdateQuantity(item.id, item.quantity - 1)
                          }
                          disabled={item.quantity <= 1}
                        >
                          <Remove fontSize="small" />
                        </IconButton>
                      </Box>
                    </Box>
                    <Typography variant="body2" color="textSecondary" mt={1}>
                      {item.description}
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{ justifyContent: 'space-between', px: 2, pb: 1 }}
                  >
                    <Button
                      color="error"
                      size="small"
                      onClick={() => dispatch(removeItem(item?.id))}
                    >
                      Remove
                    </Button>
                    <Typography variant="h6" fontWeight="bold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </Typography>
                  </CardActions>
                </Box>
              </Card>
            ))
          )}
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ p: 2 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Order Summary
            </Typography>
            <Divider />

            <Box display="flex" justifyContent="space-between" mt={2} mb={3}>
              <Typography variant="body1">Items ({totalQuantity})</Typography>
              <Typography variant="body1">${totalPrice.toFixed(2)}</Typography>
            </Box>

            <Box mb={3}>
              <Typography variant="body2" mb={1}>
                Shipping
              </Typography>
              <Select fullWidth defaultValue="standard">
                <MenuItem value="standard">Standard shipping - $10.00</MenuItem>
              </Select>
            </Box>

            <Box mb={3}>
              <Typography variant="body2" mb={1}>
                Promo Code
              </Typography>
              <TextField
                fullWidth
                placeholder="Enter your code"
                variant="outlined"
                size="small"
              />
              <Button
                variant="contained"
                color="error"
                fullWidth
                sx={{ mt: 2, textTransform: 'uppercase' }}
              >
                Apply
              </Button>
            </Box>

            <Divider />
            <Box display="flex" justifyContent="space-between" mt={3}>
              <Typography variant="subtitle1" fontWeight="bold">
                Total cost
              </Typography>
              <Typography variant="subtitle1" fontWeight="bold">
                ${(totalPrice + 10).toFixed(2)}
              </Typography>
            </Box>

            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2, textTransform: 'uppercase' }}
            >
              Checkout
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cart;
