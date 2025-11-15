import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

function CardSection({ title, children }) {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" component="h2" sx={{ fontWeight: 600, mb: 2 }}>
        {title}
      </Typography>
      <Box>{children}</Box>
    </Paper>
  )
}

export default CardSection

