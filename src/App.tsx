
import NavBar from "./components/NavBar"
import AppRoutes from "./components/AppRoutes"

import ContactForm from "./components/ContactForm"
import { ToastContainer } from "react-toastify"

function App() {

  return (
    <>
    <NavBar/>
    <AppRoutes/>
    <ToastContainer />
    <ContactForm/>
    </>
  )
}

export default App