import { useState } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Grid from '@mui/material/Grid'
import Chip from '@mui/material/Chip'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import courses from '../data/courses'

function Register() {
  const [searchQuery, setSearchQuery] = useState('')
  const [term, setTerm] = useState('spring2025')
  const [registered, setRegistered] = useState([])
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')

  const filteredCourses = courses.filter(course => {
    if (!searchQuery.trim()) return true
    const query = searchQuery.toLowerCase()
    return (
      course.code.toLowerCase().includes(query) ||
      course.title.toLowerCase().includes(query)
    )
  })

  const handleRegister = (course) => {
    setRegistered([...registered, course.id])
    setSnackbarMessage(`Registered for ${course.code} – ${course.title}`)
    setSnackbarOpen(true)
  }

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false)
  }

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" sx={{ mb: 3, fontWeight: 600 }}>
        Register for Classes
      </Typography>
      
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Search and register for courses for the upcoming term. Use the filters below to find courses that fit your schedule.
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3 }}>
          <TextField
            label="Course search"
            placeholder="Enter course code or name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{ flexGrow: 1, minWidth: 250 }}
          />
          
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel>Term</InputLabel>
            <Select value={term} label="Term" onChange={(e) => setTerm(e.target.value)}>
              <MenuItem value="spring2025">Spring 2025</MenuItem>
              <MenuItem value="fall2024">Fall 2024</MenuItem>
              <MenuItem value="summer2024">Summer 2024</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Paper>
      
      <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
        Available Courses
      </Typography>

      {filteredCourses.length === 0 ? (
        <Paper sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="body1" color="text.secondary">
            No matching classes found
          </Typography>
        </Paper>
      ) : (
        <Grid container spacing={2}>
          {filteredCourses.map(course => {
            const isRegistered = registered.includes(course.id)
            const canRegister = course.seatsAvailable > 0 && !isRegistered

            return (
              <Grid item xs={12} md={6} lg={4} key={course.id}>
                <Card>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                      <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                        {course.code}
                      </Typography>
                      {isRegistered && (
                        <Chip label="Registered" color="success" size="small" />
                      )}
                      {!isRegistered && course.seatsAvailable === 0 && (
                        <Chip label="Full" color="error" size="small" />
                      )}
                    </Box>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                      {course.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                      {course.instructor}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                      {course.time}
                    </Typography>
                    <Typography variant="body2" color={course.seatsAvailable > 0 ? 'success.main' : 'error.main'}>
                      {course.seatsAvailable} seats available
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {canRegister ? (
                      <Button
                        variant="contained"
                        color="secondary"
                        fullWidth
                        onClick={() => handleRegister(course)}
                      >
                        Add
                      </Button>
                    ) : isRegistered ? (
                      <Button variant="outlined" fullWidth disabled>
                        Registered
                      </Button>
                    ) : (
                      <Button variant="outlined" fullWidth disabled>
                        Class Full
                      </Button>
                    )}
                  </CardActions>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      )}

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  )
}

export default Register
