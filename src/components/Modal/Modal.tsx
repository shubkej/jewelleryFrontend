import { ReactNode } from 'react';
import { Box, IconButton, Modal, Typography, SxProps } from '@mui/material';
import ModalStyles from './ModalStyles';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

interface CustomeModalProps {
  open: boolean;
  handleClose?: () => void;
  title?: string;
  modalCss?: SxProps;
  children?: ReactNode;
}

const CustomeModal: React.FC<CustomeModalProps> = ({
  open,
  handleClose,
  title,
  modalCss,
  children,
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ ...ModalStyles.modalStyle, ...modalCss }}>
        <Box sx={ModalStyles.mainWrapper}>
          <Box sx={ModalStyles.header}>
            {title && <Typography variant="h4">{title}</Typography>}
            <IconButton
              sx={ModalStyles.closeIconButton}
              onClick={handleClose}
              aria-label="Close"
            >
              <HighlightOffIcon />
            </IconButton>
          </Box>
          <Box sx={ModalStyles.body}>{children}</Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default CustomeModal;
