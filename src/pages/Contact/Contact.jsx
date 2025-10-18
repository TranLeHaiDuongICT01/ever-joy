import React from 'react'
import Header from '../../components/Header/Header'
import './Contact.css'
import ContactForm from '../../components/ContactForm/ContactForm'
import Footer from '../../components/Footer/Footer'

const Contact = () => {
  return (
    <div className='contact-page'>
      <Header />
      <div className='contact-banner'></div>
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Contact
