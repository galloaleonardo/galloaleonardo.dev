import Navbar from './components/base/Navbar'
import Footer from './components/base/Footer'
import DetailCard from './components/content/DetailCard'
import { useState } from 'react'
import { Language } from './enums/Language'

function Home() {
  const [language, setLanguage] = useState<string>(Language.EN)

  return (
    <div className='lg:h-screen bg-gray-200 dark:bg-gray-900'>
      

      <Navbar onChangeLanguage={setLanguage}/>
      <DetailCard language={language} />
      <Footer />

    </div>
  )
}

export default Home
