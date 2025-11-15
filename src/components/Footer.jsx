import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

function Footer() {
  return (
    <Box component="footer" sx={{ py: 3, px: 4, backgroundColor: '#F5F5F5', borderTop: '1px solid #E0E0E0' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2, mb: 2 }}>
        <Typography variant="body2" sx={{ fontWeight: 600 }}>
          Personalization Options
        </Typography>
        <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
          <Link href="#" underline="hover" color="primary">Customize tiles</Link>
          <Link href="#" underline="hover" color="primary">Change theme</Link>
          <Link href="#" underline="hover" color="primary">Accessibility settings</Link>
        </Box>
      </Box>
      
      <Divider sx={{ my: 2 }} />
      
      <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
        <Link href="#" underline="hover" color="primary">Help</Link>
        <Link href="#" underline="hover" color="primary">Contact IT</Link>
        <Link href="#" underline="hover" color="primary">Accessibility</Link>
        <Link href="#" underline="hover" color="primary">Logout</Link>
      </Box>
    </Box>
  )
}

export default Footer

