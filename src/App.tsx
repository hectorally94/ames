import { Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import Header from './components/header/Header'
import BlogActivity from './pages/BlogActivity'
import MyEventActivity from './pages/MyEventActivity'
import MissionPage from './pages/MissionPage'
import ActionsActivity from './pages/ActionsActivity'
import DonatePage from './pages/DonatePage'
import ContactPage from './pages/ContactPage'

function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />

      <Route path="/blog" element={<BlogActivity />} />

      <Route path="/mission" element={<MissionPage />} />
      <Route path="/events" element={<MyEventActivity />} />

      <Route path="/actions" element={<ActionsActivity />} />

      <Route path="/donate" element={<DonatePage />} />
      <Route path='/contact' element={<ContactPage/>}/>
    </Routes>
       {/* Footer Section */}
      
       <Footer />
  </>
  
  )
}

export default App
