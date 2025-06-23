import React, { useState } from 'react';
import {
  Menu,
  List,
  Chip,
  Typography,
  Box,
  Divider,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

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

interface FilterDropdownProps {
  onChange: (filters: FiltersArray) => void;
  categoriesList: Category[];
}

const FiltersPanel: React.FC<FilterDropdownProps> = ({
  onChange,
  categoriesList,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [filters, setFilters] = useState<FiltersArray>([]);

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.down('md'));
  const isMd = useMediaQuery(theme.breakpoints.down('lg'));

  const handleOpen = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  const handleSelect = (categoryId: string, subcategoryId: string) => {
    const existingCategory = filters.find((f) => f.categoryId === categoryId);

    let updatedFilters: FiltersArray;

    if (existingCategory) {
      const alreadySelected =
        existingCategory.subcategoryIds.includes(subcategoryId);
      const newSubcategoryIds = alreadySelected
        ? existingCategory.subcategoryIds.filter((id) => id !== subcategoryId)
        : [...existingCategory.subcategoryIds, subcategoryId];

      if (newSubcategoryIds.length === 0) {
        updatedFilters = filters.filter((f) => f.categoryId !== categoryId);
      } else {
        updatedFilters = filters.map((f) =>
          f.categoryId === categoryId
            ? { ...f, subcategoryIds: newSubcategoryIds }
            : f,
        );
      }
    } else {
      updatedFilters = [
        ...filters,
        { categoryId, subcategoryIds: [subcategoryId] },
      ];
    }

    setFilters(updatedFilters);
    onChange(updatedFilters);
    handleClose();
  };

  const isSelected = (categoryId: string, subcategoryId: string) =>
    filters
      .find((f) => f.categoryId === categoryId)
      ?.subcategoryIds.includes(subcategoryId) ?? false;

  return (
    <>
      <List component="nav">
        <Chip
          clickable
          label="Filter"
          variant="outlined"
          icon={<FilterAltOutlinedIcon />}
          onClick={handleOpen}
          deleteIcon={<KeyboardArrowDownOutlinedIcon />}
          onDelete={handleOpen}
          role="button"
          aria-haspopup="menu"
          sx={{
            fontSize: { xs: '12px', sm: '14px', md: '16px' },
            padding: { xs: '0 4px', sm: '0 10px', md: '0 20px' },
            height: { xs: 30, sm: 35 },
            color: 'white',
            '& .MuiChip-deleteIcon': {
              color: 'white',
            },
            transition: 'background-color 0.3s ease',
            '&.MuiChip-clickable:hover': {
              opacity: 0.7,
            },
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
              width: isXs ? '90vw' : isSm ? 300 : 300,
              p: 2,
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: isXs ? 1.5 : isSm ? 3 : isMd ? 1.5 : 1.5,
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                left: 18,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'center', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {categoriesList.map((category, index) => (
          <Box key={category._id} sx={{ mb: 1 }}>
            <Typography
              variant="subtitle2"
              sx={{ fontSize: { xs: '13px', sm: '14px' } }}
              gutterBottom
            >
              {category.name}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: { xs: 0.5, sm: 1 },
              }}
            >
              {category.options.map((option) => (
                <Chip
                  key={option._id}
                  label={option.name}
                  color="default"
                  onClick={() => handleSelect(category._id, option._id)}
                  variant={
                    isSelected(category._id, option._id) ? 'filled' : 'outlined'
                  }
                  sx={{
                    height: 30,
                    fontSize: { xs: '11px', sm: '13px' },
                  }}
                />
              ))}
            </Box>
            {index < categoriesList.length - 1 && <Divider sx={{ my: 1 }} />}
          </Box>
        ))}
      </Menu>
    </>
  );
};

export default FiltersPanel;
