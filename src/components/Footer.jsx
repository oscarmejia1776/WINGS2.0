import Box from '@mui/material/Box'
import Link from '@mui/material/Link'

function Footer() {
  return (
    <Box component="footer" sx={{ py: 3, px: 4, backgroundColor: '#F5F5F5', borderTop: '1px solid #E0E0E0' }}>
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
