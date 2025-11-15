import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import Paper from '@mui/material/Paper'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Box from '@mui/material/Box'
import SearchIcon from '@mui/icons-material/Search'
import InputAdornment from '@mui/material/InputAdornment'

const searchItems = [
  { title: 'Register for Classes', path: '/register' },
  { title: 'Class Schedule', path: '/schedule' },
  { title: 'Financial Aid', path: '/financial-aid' },
  { title: 'Tuition Bill', path: '/tuition' },
  { title: 'DegreeWorks', path: '/degreeworks' },
  { title: 'Advising', path: '/advising' },
]

function Search() {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const navigate = useNavigate()
  const inputRef = useRef(null)

  const filteredItems = query.trim()
    ? searchItems.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
      )
    : []

  useEffect(() => {
    setOpen(filteredItems.length > 0)
    setActiveIndex(-1)
  }, [query])

  const handleNavigate = (path) => {
    navigate(path)
    setQuery('')
    setOpen(false)
    inputRef.current?.blur()
  }

  const handleKeyDown = (e) => {
    if (!open || filteredItems.length === 0) return

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex(prev => (prev + 1) % filteredItems.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex(prev => (prev - 1 + filteredItems.length) % filteredItems.length)
    } else if (e.key === 'Enter' && activeIndex >= 0) {
      e.preventDefault()
      handleNavigate(filteredItems[activeIndex].path)
    } else if (e.key === 'Escape') {
      setOpen(false)
      setActiveIndex(-1)
    }
  }

  return (
    <Box sx={{ position: 'relative' }}>
      <TextField
        inputRef={inputRef}
        fullWidth
        placeholder="Find what you need…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={() => filteredItems.length > 0 && setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 200)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          sx: {
            backgroundColor: 'white',
            borderRadius: 2,
          }
        }}
        inputProps={{
          'aria-label': 'Portal search',
        }}
      />
      
      {open && filteredItems.length > 0 && (
        <Paper
          sx={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            mt: 0.5,
            zIndex: 1000,
            maxHeight: 300,
            overflow: 'auto',
          }}
        >
          <List dense>
            {filteredItems.map((item, index) => (
              <ListItem key={item.path} disablePadding>
                <ListItemButton
                  selected={index === activeIndex}
                  onClick={() => handleNavigate(item.path)}
                >
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </Box>
  )
}

export default Search

