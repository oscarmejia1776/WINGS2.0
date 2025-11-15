import { useState } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import PayNowDialog from '../components/PayNowDialog'
import tuition from '../data/tuition'

function Tuition() {
  const [payDialogOpen, setPayDialogOpen] = useState(false)

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" sx={{ mb: 3, fontWeight: 600 }}>
        Tuition Bill
      </Typography>
      
      <Paper sx={{ p: 3, mb: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h5" component="h2">
            Current Balance: ${tuition.balance}
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => setPayDialogOpen(true)}
            sx={{
              backgroundColor: 'secondary.main',
              '&:hover': {
                backgroundColor: '#A67810',
              }
            }}
          >
            Pay Now
          </Button>
        </Box>
      </Paper>
      
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
          Transaction History
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: 'primary.main' }}>
                <TableCell sx={{ color: 'white', fontWeight: 600 }}>Date</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 600 }}>Description</TableCell>
                <TableCell align="right" sx={{ color: 'white', fontWeight: 600 }}>Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tuition.history.map(transaction => (
                <TableRow key={transaction.id} hover>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.description}</TableCell>
                  <TableCell align="right" sx={{ color: transaction.amount > 0 ? 'green' : 'inherit' }}>
                    {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      
      <PayNowDialog open={payDialogOpen} onClose={() => setPayDialogOpen(false)} />
    </Container>
  )
}

export default Tuition

