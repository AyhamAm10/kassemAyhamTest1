import React from 'react'
import bg from "../assets/Background Patterns.png"
import email from "../assets/emil.svg"
import call from "../assets/callIcon.svg"
import ContactUsCard from '../component/contactUs/ContactUsCard'
import CountactUsForm from '../component/contactUs/CountactUsForm'
const ContactUs:React.FC = () => {
  return (
    <section className=' relative pt-12 px-3 sm:pt-18 md:pt-20 lg:pt-24 flex items-center justify-center'>
          <img src={bg} alt="background patterns" className=' absolute right-0 top-20 h-[90%]' />
          <div className='flex flex-col items-center max-w-[1369px] gap-10 z-20'>
              <h1 className='font-semibold text-2xl sm:text-3xl md:text-5xl lg:text-7xl '>Get in touch today</h1>
              <div className='flex flex-col md:flex-row items-center gap-6'>
                <ContactUsCard img={email} title='Mail Us' desc='Support@yjoz.com' />
                <ContactUsCard img={call} title='Call Us' desc='+999 999 9999' />
              </div>
              <CountactUsForm />
          </div>

    </section>
  )
}

export default ContactUs