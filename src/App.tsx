import Navbar from './components/Navbar'
import ImageSlider from './components/ImageSlider'
import Introduction from './components/Introduction'
import ResearchAreas from './components/ResearchAreas'
import AboutLab from './components/AboutLab'

export default function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ImageSlider />
      <div className="mt-8">
        <div className="container mx-auto px-4 py-8">
          <Introduction />
          <ResearchAreas />
          <AboutLab />
        </div>
      </div>
    </main>
  )
}