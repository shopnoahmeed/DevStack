
import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import StackSection from './components/StackSection'
import { Suspense } from 'react'
function App() {
  

  return (
    <>
    <Navbar/>
      <Banner />
      <Suspense
  fallback={
    <div className="flex items-center justify-center py-20">
      <p className="text-sm text-slate-500">
        Loading technologies...
      </p>
    </div>
  }
>
  <StackSection />
</Suspense>
    </>
  )
}

export default App
