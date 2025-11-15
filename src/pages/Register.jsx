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
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'

function Register() {
  const mockCourses = [
    { id: 1, code: 'CS 4320', name: 'Software Engineering', credits: 3, instructor: 'Dr. Brown', seats: 5 },
    { id: 2, code: 'CS 4530', name: 'Database Systems', credits: 3, instructor: 'Prof. Lee', seats: 12 },
    { id: 3, code: 'MATH 3230', name: 'Linear Algebra', credits: 3, instructor: 'Dr. Martinez', seats: 8 },
  ]

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
            sx={{ flexGrow: 1, minWidth: 250 }}
          />
          
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel>Term</InputLabel>
            <Select defaultValue="spring2025" label="Term">
              <MenuItem value="spring2025">Spring 2025</MenuItem>
              <MenuItem value="fall2024">Fall 2024</MenuItem>
              <MenuItem value="summer2024">Summer 2024</MenuItem>
            </Select>
          </FormControl>
          
          <Button variant="contained" color="primary" sx={{ px: 4 }}>
            Search
          </Button>
        </Box>
      </Paper>
      
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
          Available Courses
        </Typography>
        
        <List>
          {mockCourses.map((course, index) => (
            <Box key={course.id}>
              <ListItem
                secondaryAction={
                  <Button variant="contained" color="secondary">
                    Add
                  </Button>
                }
              >
                <ListItemText
                  primary={`${course.code} - ${course.name}`}
                  secondary={`${course.credits} credits • ${course.instructor} • ${course.seats} seats available`}
                />
              </ListItem>
              {index < mockCourses.length - 1 && <Divider />}
            </Box>
          ))}
        </List>
      </Paper>
    </Container>
  )
}

export default Register

