import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Chip from '@mui/material/Chip'
import aid from '../data/aid'

function FinancialAid() {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" sx={{ mb: 3, fontWeight: 600 }}>
        Financial Aid
      </Typography>
      
      <Paper sx={{ p: 3, mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
          <Typography variant="h6" component="h2">
            Status:
          </Typography>
          <Chip label={aid.status} color="primary" />
        </Box>
        
        <Typography variant="h6" component="h3" sx={{ mb: 2 }}>
          To-Do Items
        </Typography>
        <List>
          {aid.todos.map((todo, index) => (
            <ListItem key={index}>
              <ListItemText primary={`• ${todo}`} />
            </ListItem>
          ))}
        </List>
      </Paper>
      
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
          Award Summary
        </Typography>
        <Typography variant="body1">
          Your financial aid package has been processed and is pending final approval. 
          Please complete all to-do items above to ensure timely disbursement.
        </Typography>
      </Paper>
    </Container>
  )
}

export default FinancialAid

