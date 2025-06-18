import { Paper, styled } from '@mui/material';

export const ContainerCard = styled(Paper)(({ theme }) => ({
  width: '100%',
  maxWidth: 420,
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  backgroundColor: 'rgba(43, 39, 39, 0.5)',
  color: '#fff',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
  },
}));

export const inputStyles = {
  input: {
    color: '#fff',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#aaa',
    },
    '&:hover fieldset': {
      borderColor: '#fff',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#fff',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#ccc',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#fff',
  },
  '& .MuiOutlinedInput-root.Mui-focused .MuiInputLabel-root': {
    color: '#fff',
  },
};

