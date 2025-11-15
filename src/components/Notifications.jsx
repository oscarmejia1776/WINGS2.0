import { useState } from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import NotificationsIcon from '@mui/icons-material/Notifications'
import CardSection from './CardSection'
import notificationsData from '../data/notifications'

function Notifications() {
  const [notifications, setNotifications] = useState(notificationsData)

  const handleDismiss = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id))
  }

  return (
    <CardSection title="Notifications">
      <List>
        {notifications.map(notification => (
          <ListItem
            key={notification.id}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="dismiss notification"
                onClick={() => handleDismiss(notification.id)}
              >
                <CloseIcon />
              </IconButton>
            }
          >
            <ListItemIcon>
              <NotificationsIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={notification.message} />
          </ListItem>
        ))}
      </List>
    </CardSection>
  )
}

export default Notifications

