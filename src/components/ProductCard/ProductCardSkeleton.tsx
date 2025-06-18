import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';

export default function ProductCardSkeleton() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Skeleton
        variant="rectangular"
        height={220}
        sx={{ p: 2, borderRadius: 1 }}
      />

      <CardContent>
        <Stack spacing={1}>
          <Skeleton variant="text" width="80%" height={24} />
          <Skeleton variant="text" width="100%" height={18} />
          <Skeleton variant="text" width="90%" height={18} />
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={2}
          >
            <Skeleton variant="text" width="30%" height={20} />
          </Box>

          <Skeleton
            variant="rectangular"
            width="100%"
            height={36}
            sx={{ borderRadius: 1 }}
          />
        </Stack>
      </CardContent>
    </Card>
  );
}
