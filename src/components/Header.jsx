import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Search from './Search'
import logo from '../assets/logo.svg'

function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'primary.main' }}>
      <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <img src={logo} alt="Georgia Southern Logo" style={{ height: 50 }} />
          <Typography variant="h5" component="div" sx={{ fontWeight: 600, color: 'white' }}>
            WINGS 2.0
          </Typography>
        </Box>
        
        <Box sx={{ flexGrow: 1, maxWidth: 600, mx: 4, display: { xs: 'none', md: 'block' } }}>
          <Search />
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Avatar sx={{ bgcolor: 'secondary.main', width: 32, height: 32 }}>P</Avatar>
          <Typography variant="body1" sx={{ color: 'white' }}>
            Phillip M.
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header

