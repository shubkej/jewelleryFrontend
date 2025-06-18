import { FC } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Fade } from "@mui/material";
import LoadingComponentsStyle from "./LoadingComponentsStyle";
interface ILoadingComponents {
  isActive: boolean;
}
const LoadingComponents: FC<ILoadingComponents> = ({ isActive }) => {
  return (
    <Box {...LoadingComponentsStyle.mainBox}>
      <Box {...LoadingComponentsStyle.containerBox}>
        <Fade in={isActive}>
          <CircularProgress />
        </Fade>
      </Box>
    </Box>
  );
};

export default LoadingComponents;
