import { alpha, styled } from '@mui/material/styles';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { Theme } from '@mui/material/styles/createTheme';

const ODD_OPACITY = 0.1;

const CustomDataGrid = styled(DataGrid)(({ theme }: { theme: Theme }) => ({

  '& .MuiDataGrid-columnHeader': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText, 
    fontWeight: 'bold',
    fontSize: theme.typography.h1.fontSize, 
  },

  [`& .${gridClasses.row}.even`]: {
    backgroundColor: theme.palette.background.default,
    '&:hover, &.Mui-hovered': {
      backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
  },
  [`& .${gridClasses.row}.odd`]: {
    backgroundColor: theme.palette.background.paper,
    '&:hover, &.Mui-hovered': {
      backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
    '&.Mui-selected': {
      backgroundColor: alpha(
        theme.palette.primary.main,
        ODD_OPACITY + theme.palette.action.selectedOpacity,
      ),
      '&:hover, &.Mui-hovered': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          ODD_OPACITY +
          theme.palette.action.selectedOpacity +
          theme.palette.action.hoverOpacity,
        ),
        '@media (hover: none)': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            ODD_OPACITY + theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  },
}));

export default CustomDataGrid;

