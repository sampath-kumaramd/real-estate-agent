import Footer from '@/components/footer'
import Navigation from '@/components/navigation'
import React from 'react'


function HomePage() {
  return (
    <div>
      <Navigation/>
      <div className='h-[50vh]'></div>
      <Footer/>
    </div>
  )
}

export default HomePage