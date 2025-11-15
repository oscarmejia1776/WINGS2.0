import { useNavigate } from 'react-router-dom'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

function NotFound() {
  const navigate = useNavigate()

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Paper sx={{ p: 5, textAlign: 'center' }}>
        <Typography variant="h1" component="h1" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
          404
        </Typography>
        <Typography variant="h5" component="h2" sx={{ mb: 3 }}>
          Page not found
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          The page you are looking for doesn't exist or has been moved.
        </Typography>
        <Button variant="contained" color="primary" size="large" onClick={() => navigate('/')}>
          Go to Home
        </Button>
      </Paper>
    </Container>
  )
}

export default NotFound

