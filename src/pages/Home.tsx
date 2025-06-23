import {
  Box,
  Typography,
  Container,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ImageCarousel from '../components/CarouselComponent/ImageCarousel';
import { images } from '../utils/constant';
import ButtonComponent from '../components/ButtonComponent/ButtonComponent';

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <ImageCarousel boxSx={{ height: '90vh' }} images={images} />
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <Typography variant="h2" gutterBottom>
          Welcome to Jeweluxe
        </Typography>
        <Typography variant="h5" gutterBottom>
          Your destination for exquisite jewelry
        </Typography>
        <ButtonComponent
          text="Discover Our Collection"
          variant="contained"
          sx={{ mt: 2, bgcolor: 'black', color: 'white', '&:hover': { bgcolor: 'red' } }}
          onClick={() => navigate('/product')}
        />
      </Box>

      <Container sx={{ py: 6, color: 'white' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Featured Collections
        </Typography>
        <Grid container spacing={4}>
          {['Gold Necklace', 'Diamond Ring', 'Silver Earrings'].map(
            (title, index) => (
              <Grid key={index} size={{ sm: 4 }}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={
                      'https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    }
                    alt={title}
                  />
                  <CardContent>
                    <Typography variant="h6">{title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Elegant handcrafted piece perfect for special occasions.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ),
          )}
        </Grid>
      </Container>

      <Box sx={{ bgcolor: '#f5f5f5', py: 6 }}>
        <Container>
          <Typography variant="h4" align="center" gutterBottom>
            About Jeweluxe
          </Typography>
          <Typography variant="body1" align="center" maxWidth="sm" mx="auto">
            At Jeweluxe, we blend timeless design with modern craftsmanship to
            offer you jewelry that resonates with elegance and quality. Every
            piece tells a story.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: 6, color: 'white' }}>
        <Container>
          <Typography variant="h4" align="center" gutterBottom>
            Get In Touch
          </Typography>
          <Typography
            variant="body1"
            align="center"
            maxWidth="sm"
            mx="auto"
            gutterBottom
          >
            Contact us for custom orders, wholesale pricing, or just to say
            hello.
          </Typography>
          <Box textAlign="center" mt={2}>
            <Button variant="outlined" color="primary">
              Contact Us
            </Button>
          </Box>
        </Container>
      </Box>

      <Box
        sx={{ bgcolor: 'black', color: 'white', py: 3, textAlign: 'center' }}
      >
        <Typography variant="body2">
          © 2025 Jeweluxe. All rights reserved.
        </Typography>
      </Box>
    </>
  );
};

export default Home;
