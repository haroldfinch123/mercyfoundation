import React from 'react'
import PreLoader from './PreLoader'
import Header from './Header'
import MainSection from './MainSection'
import Footer from './Footer'
import RegDocuments from './RegDocuments'
import ContactInfoContent from './ContactInfoContent'

function ContactUs() {
  return (
    <>
        <PreLoader />
        <Header />
        <ContactInfoContent />
        <Footer />
    </>
  )
}

export default ContactUs