

const App = () => {

import './index.css'
import { Box } from "@chakra-ui/react"
import Footer from "./components/Footer"


function App() {
  return (


    <Box minH="100vh" display="flex" flexDirection="column">
      <NavBar />

      {/* Main content takes remaining space */}
      <Box flex="1">
        <AppRoutes />
      </Box>

      {/* Footer stays at the bottom */}
      <Footer />
    </Box>

  )
}

export default App
