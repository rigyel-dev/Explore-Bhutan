import NavBar from "./components/NavBar"
import AppRoutes from "./components/AppRoutes"

import './index.css'
import { Box } from "@chakra-ui/react"
import Footer from "./components/Footer"

const App=()=> {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <NavBar />

      
      <Box flex="1">
        <AppRoutes />
      </Box>

     
      <Footer />
    </Box>
  )
}

export default App
