import Navbar from './components/base/Navbar'
import Footer from './components/base/Footer'
import DetailCard from './components/content/DetailCard'

function Home() {
  return (
    <div className='lg:h-screen bg-gray-200 dark:bg-gray-900'>

      <Navbar/>
      <DetailCard />
      <Footer />

    </div>
  )
}

export default Home
