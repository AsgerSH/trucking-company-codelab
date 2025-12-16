import Header from '../../components/header/Header.jsx'
import './App.css'
import { Outlet } from 'react-router'
import Footer from '../../components/footer/Footer.jsx'

function App() {

  return (
    <>
    <Header headers={[{ title: "Home", url: "/" }
      , { title: "Trucks", url: "/trucks" }
      , { title: "Drivers", url: "/drivers" }
      , { title: "Register Drivers", url: "/registerdrivers" }
    ]}
       />
       <Footer />
      <Outlet />
    </>
  )
}

export default App
