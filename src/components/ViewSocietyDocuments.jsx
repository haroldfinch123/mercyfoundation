import React from 'react'
import PreLoader from './PreLoader'
import Header from './Header'
import MainSection from './MainSection'
import Footer from './Footer'
import RegDocuments from './RegDocuments'

function ViewSocietyDocuments() {
  return (
    <>
        {/* <PreLoader /> */}
        <Header />
        <RegDocuments />
        <Footer />
    </>
  )
}

export default ViewSocietyDocuments