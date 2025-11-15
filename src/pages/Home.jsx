import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import SchoolIcon from '@mui/icons-material/School'
import AssessmentIcon from '@mui/icons-material/Assessment'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import EventIcon from '@mui/icons-material/Event'
import DescriptionIcon from '@mui/icons-material/Description'
import Tile from '../components/Tile'
import CardSection from '../components/CardSection'
import Notifications from '../components/Notifications'
import PayNowDialog from '../components/PayNowDialog'

function Home() {
  const navigate = useNavigate()
  const [payDialogOpen, setPayDialogOpen] = useState(false)

  const quickLinks = [
    { title: 'Register for Classes', path: '/register', icon: <SchoolIcon color="primary" /> },
    { title: 'DegreeWorks', path: '/degreeworks', icon: <AssessmentIcon color="primary" /> },
    { title: 'Advising', path: '/advising', icon: <SupportAgentIcon color="primary" /> },
  ]

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Tile
            title="Schedule Overview"
            path="/schedule"
            icon={<EventIcon color="primary" />}
            content={
              <Typography variant="body1">
                Next class at 10:30 am
              </Typography>
            }
          />
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Tile
            title="Financial Aid Status"
            path="/financial-aid"
            icon={<AttachMoneyIcon color="primary" />}
            content={
              <Typography variant="body1">
                Award accepted – Pending
              </Typography>
            }
          />
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Tile
            title="Tuition Bill"
            path="/tuition"
            icon={<DescriptionIcon color="primary" />}
            content={
              <Box>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  Balance: $150 due
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={(e) => {
                    e.stopPropagation()
                    setPayDialogOpen(true)
                  }}
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
            }
          />
        </Grid>
        
        <Grid item xs={12} md={6}>
          <CardSection title="Quick Links">
            <List>
              {quickLinks.map(link => (
                <ListItem key={link.path} disablePadding>
                  <ListItemButton onClick={() => navigate(link.path)}>
                    <ListItemIcon>
                      {link.icon}
                    </ListItemIcon>
                    <ListItemText primary={link.title} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </CardSection>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Notifications />
        </Grid>
      </Grid>
      
      <PayNowDialog open={payDialogOpen} onClose={() => setPayDialogOpen(false)} />
    </Container>
  )
}

export default Home

