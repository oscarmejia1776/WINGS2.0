// Commands to run:
// npm create vite@latest wings2 -- --template react
// cd wings2
// npm install
// npm install @mui/material @mui/icons-material @emotion/react @emotion/styled react-router-dom
// npm run dev

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Schedule from './pages/Schedule'
import FinancialAid from './pages/FinancialAid'
import Tuition from './pages/Tuition'
import Register from './pages/Register'
import DegreeWorks from './pages/DegreeWorks'
import Advising from './pages/Advising'
import NotFound from './pages/NotFound'

const theme = createTheme({
  palette: {
    primary: {
      main: '#041E42',
    },
    secondary: {
      main: '#C69214',
    },
    background: {
      default: '#F5F5F5',
    },
    text: {
      primary: '#111827',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <Box component="main" sx={{ flexGrow: 1, backgroundColor: 'background.default' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/financial-aid" element={<FinancialAid />} />
              <Route path="/tuition" element={<Tuition />} />
              <Route path="/register" element={<Register />} />
              <Route path="/degreeworks" element={<DegreeWorks />} />
              <Route path="/advising" element={<Advising />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  )
}

export default App
