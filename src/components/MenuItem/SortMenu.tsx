import * as React from 'react';
import List from '@mui/material/List';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Chip, { ChipProps } from '@mui/material/Chip';
import { SxProps, Theme } from '@mui/system';

export interface SortMenuProps {
  options: any[];
  onSelect: (option: string, index: number) => void;
  defaultIndex?: number;

  // New props for chip customization
  label?: React.ReactNode;
  icon?: ChipProps['icon'];
  deleteIcon?: ChipProps['deleteIcon'];
  onDelete?: ChipProps['onDelete'];
  sx?: SxProps<Theme>;
}

const SortMenu: React.FC<SortMenuProps> = ({
  options,
  onSelect,
  defaultIndex = 0,
  label = 'Sort By',
  icon,
  deleteIcon,
  sx,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(defaultIndex);
  const open = Boolean(anchorEl);

  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number,
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    onSelect(options[index], index);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <List component="nav">
        <Chip
          clickable
          onClick={handleClickListItem}
          variant="outlined"
          label={label}
          icon={icon}
          deleteIcon={deleteIcon}
          onDelete={handleClickListItem}
          sx={{
            fontSize: { xs: '12px', sm: '14px' },
            padding: { xs: '0 5px', md: '0 20px' },
            height: '35px',
            color: 'white',
            '& .MuiChip-deleteIcon': {
              color: 'white',
            },
            transition: 'background-color 0.3s ease',
            '&.MuiChip-clickable:hover': {
              opacity: 0.7,
            },
            ...sx,
          }}
        />
      </List>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {options.map((option:any, index:any) => (
          <MenuItem
            key={index}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            <img src={option?.icon} style={{width:"25px", height:"25px", marginRight:"15px"}} alt="" />
            {option?.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default SortMenu;
