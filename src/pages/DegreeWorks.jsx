import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import LinearProgress from '@mui/material/LinearProgress'

function DegreeWorks() {
  const stats = {
    earned: 90,
    inProgress: 15,
    remaining: 15,
    total: 120,
  }

  const progress = (stats.earned / stats.total) * 100

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" sx={{ mb: 3, fontWeight: 600 }}>
        DegreeWorks
      </Typography>
      
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" component="h2" sx={{ mb: 3 }}>
          Degree Audit Summary
        </Typography>
        
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body2">Progress toward degree</Typography>
            <Typography variant="body2">{stats.earned} of {stats.total} credits</Typography>
          </Box>
          <LinearProgress variant="determinate" value={progress} sx={{ height: 10, borderRadius: 5 }} />
        </Box>
        
        <Grid container spacing={3} sx={{ mb: 3 }}>
          <Grid item xs={12} sm={4}>
            <Box sx={{ textAlign: 'center', p: 2, backgroundColor: '#E8F5E9', borderRadius: 2 }}>
              <Typography variant="h4" sx={{ fontWeight: 600, color: 'success.main' }}>
                {stats.earned}
              </Typography>
              <Typography variant="body2">Credits Earned</Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Box sx={{ textAlign: 'center', p: 2, backgroundColor: '#FFF3E0', borderRadius: 2 }}>
              <Typography variant="h4" sx={{ fontWeight: 600, color: 'warning.main' }}>
                {stats.inProgress}
              </Typography>
              <Typography variant="body2">In Progress</Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Box sx={{ textAlign: 'center', p: 2, backgroundColor: '#E3F2FD', borderRadius: 2 }}>
              <Typography variant="h4" sx={{ fontWeight: 600, color: 'info.main' }}>
                {stats.remaining}
              </Typography>
              <Typography variant="body2">Remaining</Typography>
            </Box>
          </Grid>
        </Grid>
        
        <Button variant="contained" color="primary" size="large">
          Open Audit (demo)
        </Button>
      </Paper>
      
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
          Requirements Status
        </Typography>
        <Typography variant="body1">
          Your degree audit shows you are on track to graduate. Please consult with your advisor 
          to ensure all requirements are met and to plan your remaining coursework.
        </Typography>
      </Paper>
    </Container>
  )
}

export default DegreeWorks

