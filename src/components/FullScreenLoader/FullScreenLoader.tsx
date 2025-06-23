import { FC } from 'react';
import { Backdrop } from '@mui/material';

interface FullScreenLoaderI {
  open: boolean;
}

const FullScreenLoader: FC<FullScreenLoaderI> = ({ open }) => {
  return (
    <>
      <Backdrop
        open={open}
        sx={{ backgroundColor: 'white', zIndex: 10000 }}
      >
        <img
          src="/loader.gif"
          alt="Loading..."
        />
      </Backdrop>
    </>
  );
};

export default FullScreenLoader;
