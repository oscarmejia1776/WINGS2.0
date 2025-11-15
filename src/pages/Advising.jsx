import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'

function Advising() {
  const advisor = {
    name: 'Dr. Jennifer Anderson',
    email: 'janderson@georgiasouthern.edu',
    phone: '(912) 478-5555',
    office: 'IT Building, Room 301',
    hours: 'Monday-Thursday: 10:00 am - 3:00 pm',
  }

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" sx={{ mb: 3, fontWeight: 600 }}>
        Advising
      </Typography>
      
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" component="h2" sx={{ mb: 3 }}>
          Your Academic Advisor
        </Typography>
        
        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            {advisor.name}
          </Typography>
          
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <EmailIcon color="primary" />
              <Typography>{advisor.email}</Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <PhoneIcon color="primary" />
              <Typography>{advisor.phone}</Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LocationOnIcon color="primary" />
              <Typography>{advisor.office}</Typography>
            </Box>
          </Box>
        </Box>
        
        <Paper sx={{ p: 2, backgroundColor: '#F5F5F5', mb: 3 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
            Office Hours
          </Typography>
          <Typography variant="body2">
            {advisor.hours}
          </Typography>
        </Paper>
        
        <Button
          variant="contained"
          color="secondary"
          size="large"
          startIcon={<EmailIcon />}
          href={`mailto:${advisor.email}?subject=Advising Appointment Request`}
        >
          Schedule Meeting
        </Button>
      </Paper>
      
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
          Advising Resources
        </Typography>
        <Typography variant="body1">
          Your advisor is here to help you navigate your academic journey. Schedule regular meetings 
          to discuss course selection, degree progress, career goals, and any academic concerns.
        </Typography>
      </Paper>
    </Container>
  )
}

export default Advising

