import * as React from 'react';
import { red } from '@mui/material/colors';
import { brown } from '@mui/material/colors';
import { alpha } from '@mui/material/styles';
import { Fade } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

type ThemeProps= {
  children: React.ReactNode;
};

const theme = createTheme({
  palette: {
    primary: {
      main: brown[500],
    },
  },
});

export const Theme = ({children}: ThemeProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

