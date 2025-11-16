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
import EmailIcon from '@mui/icons-material/Email'
import EventAvailableIcon from '@mui/icons-material/EventAvailable'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Chip from '@mui/material/Chip'
import AddIcon from '@mui/icons-material/Add'
import Paper from '@mui/material/Paper'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import Tile from '../components/Tile'
import CardSection from '../components/CardSection'
import Notifications from '../components/Notifications'
import PayNowDialog from '../components/PayNowDialog'

const allTilesConfig = [
  { id: 'schedule', type: 'schedule', label: 'Schedule Overview', icon: <EventIcon color="primary" /> },
  { id: 'aid', type: 'aid', label: 'Financial Aid Status', icon: <AttachMoneyIcon color="primary" /> },
  { id: 'tuition', type: 'tuition', label: 'Tuition Bill', icon: <DescriptionIcon color="primary" /> },
  { id: 'quickLinks', type: 'quickLinks', label: 'Quick Links', icon: <SchoolIcon color="primary" /> },
  { id: 'notifications', type: 'notifications', label: 'Notifications', icon: <EventAvailableIcon color="primary" /> },
  { id: 'email', type: 'email', label: 'Email', icon: <EmailIcon color="primary" /> },
  { id: 'canvas', type: 'canvas', label: 'Canvas', icon: <SchoolOutlinedIcon color="primary" /> },
  { id: 'events', type: 'events', label: 'Campus Events', icon: <EventAvailableIcon color="primary" /> }
]

function Home() {
  const navigate = useNavigate()
  const [payDialogOpen, setPayDialogOpen] = useState(false)
  const [customizeMode, setCustomizeMode] = useState(false)
  const [visibleTiles, setVisibleTiles] = useState([
    'schedule',
    'aid',
    'tuition',
    'quickLinks',
    'notifications'
  ])
  const [previousVisibleTiles, setPreviousVisibleTiles] = useState(null)
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')

  const quickLinks = [
    { title: 'Register for Classes', path: '/register', icon: <SchoolIcon color="primary" /> },
    { title: 'DegreeWorks', path: '/degreeworks', icon: <AssessmentIcon color="primary" /> },
    { title: 'Advising', path: '/advising', icon: <SupportAgentIcon color="primary" /> }
  ]

  const hiddenTiles = allTilesConfig.filter(tile => !visibleTiles.includes(tile.id))

  const handleCustomizeClick = () => {
    setPreviousVisibleTiles([...visibleTiles])
    setCustomizeMode(true)
  }

  const handleDone = () => {
    setCustomizeMode(false)
    setPreviousVisibleTiles(null)
  }

  const handleCancel = () => {
    if (previousVisibleTiles) {
      setVisibleTiles(previousVisibleTiles)
    }
    setCustomizeMode(false)
    setPreviousVisibleTiles(null)
  }

  const handleRemoveTile = (tileId) => {
    setVisibleTiles(visibleTiles.filter(id => id !== tileId))
  }

  const handleAddTile = (tileId) => {
    if (visibleTiles.length >= 5) {
      setSnackbarMessage('You can only have 5 tiles on your dashboard')
      setSnackbarOpen(true)
      return
    }
    setVisibleTiles([...visibleTiles, tileId])
  }

  const handleDragEnd = (result) => {
    if (!result.destination) return

    if (
      result.destination.droppableId === result.source.droppableId &&
      result.destination.index === result.source.index
    ) {
      return
    }

    const updated = Array.from(visibleTiles)
    const [moved] = updated.splice(result.source.index, 1)
    updated.splice(result.destination.index, 0, moved)

    setVisibleTiles(updated)
  }

  const renderTileContent = (tileType) => {
    switch (tileType) {
      case 'schedule':
        return (
          <Tile
            title="Schedule Overview"
            path={!customizeMode ? "/schedule" : undefined}
            icon={<EventIcon color="primary" />}
            content={
              <Typography variant="body1">
                Next class at 10:30 am
              </Typography>
            }
          />
        )
      case 'aid':
        return (
          <Tile
            title="Financial Aid Status"
            path={!customizeMode ? "/financial-aid" : undefined}
            icon={<AttachMoneyIcon color="primary" />}
            content={
              <Typography variant="body1">
                Award accepted – Pending
              </Typography>
            }
          />
        )
      case 'tuition':
        return (
          <Tile
            title="Tuition Bill"
            path={!customizeMode ? "/tuition" : undefined}
            icon={<DescriptionIcon color="primary" />}
            content={
              <Box>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  Balance: $150 due
                </Typography>
                {!customizeMode && (
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
                        backgroundColor: '#A67810'
                      }
                    }}
                  >
                    Pay Now
                  </Button>
                )}
              </Box>
            }
          />
        )
      case 'quickLinks':
        return (
          <CardSection title="Quick Links">
            <List>
              {quickLinks.map(link => (
                <ListItem key={link.path} disablePadding>
                  <ListItemButton 
                    onClick={() => !customizeMode && navigate(link.path)}
                    disabled={customizeMode}
                  >
                    <ListItemIcon>{link.icon}</ListItemIcon>
                    <ListItemText primary={link.title} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </CardSection>
        )
      case 'notifications':
        return <Notifications />
      case 'email':
        return (
          <Tile
            title="Email"
            icon={<EmailIcon color="primary" />}
            content={
              <Typography variant="body1">
                3 unread messages
              </Typography>
            }
          />
        )
      case 'canvas':
        return (
          <Tile
            title="Canvas"
            icon={<SchoolOutlinedIcon color="primary" />}
            content={
              <Typography variant="body1">
                2 assignments due this week
              </Typography>
            }
          />
        )
      case 'events':
        return (
          <Tile
            title="Campus Events"
            icon={<EventAvailableIcon color="primary" />}
            content={
              <Typography variant="body1">
                Career Fair – Nov 20
              </Typography>
            }
          />
        )
      default:
        return null
    }
  }

  const renderTiles = () => {
    if (customizeMode) {
      return (
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="tiles">
            {(provided) => (
              <Grid
                container
                spacing={3}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {visibleTiles.map((tileId, index) => {
                  const tileConfig = allTilesConfig.find(t => t.id === tileId)
                  const isFullWidth = tileId === 'quickLinks' || tileId === 'notifications'

                  return (
                    <Draggable key={tileId} draggableId={tileId} index={index}>
                      {(dragProvided, snapshot) => (
                        <Grid
                          item
                          xs={12}
                          md={isFullWidth ? 6 : 4}
                          ref={dragProvided.innerRef}
                          {...dragProvided.draggableProps}
                          {...dragProvided.dragHandleProps}
                          sx={{
                            position: 'relative',
                            opacity: snapshot.isDragging ? 0.8 : 1,
                            cursor: 'grab'
                          }}
                        >
                          <IconButton
                            aria-label="remove tile"
                            size="small"
                            onClick={() => handleRemoveTile(tileId)}
                            sx={{
                              position: 'absolute',
                              top: 8,
                              right: 8,
                              zIndex: 10,
                              backgroundColor: 'white',
                              boxShadow: 1,
                              '&:hover': {
                                backgroundColor: '#f5f5f5'
                              }
                            }}
                          >
                            <CloseIcon fontSize="small" />
                          </IconButton>
                          {renderTileContent(tileConfig.type)}
                        </Grid>
                      )}
                    </Draggable>
                  )
                })}
                {provided.placeholder}
              </Grid>
            )}
          </Droppable>
        </DragDropContext>
      )
    }

    return (
      <Grid container spacing={3}>
        {visibleTiles.map((tileId) => {
          const tileConfig = allTilesConfig.find(t => t.id === tileId)
          const isFullWidth = tileId === 'quickLinks' || tileId === 'notifications'

          return (
            <Grid
              key={tileId}
              item
              xs={12}
              md={isFullWidth ? 6 : 4}
            >
              {renderTileContent(tileConfig.type)}
            </Grid>
          )
        })}
      </Grid>
    )
  }

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {customizeMode && (
        <Paper sx={{ p: 2, mb: 3, backgroundColor: '#E3F2FD' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
            <Typography variant="body1">
              <strong>Customize mode:</strong> Drag tiles to rearrange, click × to remove, or add new tiles below. Click Done when finished.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button variant="outlined" onClick={handleCancel}>
                Cancel
              </Button>
              <Button variant="contained" color="primary" onClick={handleDone}>
                Done
              </Button>
            </Box>
          </Box>
        </Paper>
      )}

      {renderTiles()}

      {customizeMode && hiddenTiles.length > 0 && (
        <Paper sx={{ p: 3, mt: 4 }}>
          <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
            Available Tiles
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {hiddenTiles.map(tile => (
              <Chip
                key={tile.id}
                icon={tile.icon}
                label={tile.label}
                onClick={() => handleAddTile(tile.id)}
                deleteIcon={<AddIcon />}
                onDelete={() => handleAddTile(tile.id)}
                sx={{ px: 1 }}
              />
            ))}
          </Box>
        </Paper>
      )}

      {!customizeMode && (
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Button variant="text" color="primary" onClick={handleCustomizeClick}>
            Customize tiles
          </Button>
        </Box>
      )}

      <PayNowDialog open={payDialogOpen} onClose={() => setPayDialogOpen(false)} />

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="warning" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  )
}

export default Home
