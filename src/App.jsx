import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import BrandStory from './components/BrandStory'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <BrandStory />
        <Footer />
      </main>
    </div>
  )
}

export default App
