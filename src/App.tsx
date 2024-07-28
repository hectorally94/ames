import { Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import AboutPage from './pages/AboutPage'
import DonatePage from './pages/DonatePage'
import HomePage from './pages/HomePage'
import Header from './components/header/Header'
import BlogActivity from './components/Blog/BlogActivity'
import MyEventActivity from './components/evenements/MyEventActivity'
import MissionPage from './pages/MissionPage'

function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/donate" element={<DonatePage />} />

      <Route path="/blog" element={<BlogActivity />} />

      <Route path="/mission" element={<MissionPage />} />
      <Route path="/events" element={<MyEventActivity />} />
    </Routes>
       {/* Footer Section */}
      
       <Footer />
  </>
  
  )
}

export default App
