import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Typography from '@mui/material/Typography';

const theme = createTheme();

const Header = () => {
    return (
        <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <NewspaperIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            NEWs Buscador
          </Typography>
        </Toolbar>
      </AppBar>
      </ThemeProvider>
    )
}

export default Header