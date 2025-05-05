import NavBar from "./components/NavBar"
import AppRoutes from "./components/AppRoutes"
import { ToastContainer } from "react-toastify"
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
      <ToastContainer/>
    </Box>

  )
}

export default App
