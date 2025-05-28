import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'
import Banner from '@/components/landing-page/Banner'
import HowItWorks from '@/components/landing-page/HowItWork'
import MyHoodAfrica from '@/components/landing-page/WhyMyhood'
import CoreFeatures from '@/components/OurCoreFeature'
import React from 'react'

export default function index() {
  return (
    <>
     <Navbar/>
    {/* Add id to Banner for Home section */}
    <section className='mt-14' id="home">
      <Banner/>
    </section>
    
    {/* Add id to HowItWorks section */}
    <section id="how-it-works" className='bg-[#FAFAFB]'>
      <HowItWorks/>
    </section>
    
    {/* Add id to CoreFeatures section */}
    <section id="features">
      <CoreFeatures/>
    </section>
    
    {/* Add id to MyHoodAfrica section */}
    <section id="why-choose-us">
      <MyHoodAfrica/>
    </section>
    
    <Footer/>
    </>
  )
}