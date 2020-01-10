import React from 'react'
import Navbar from '../components/common/Navbar'

const DefaultLayout = ({ children }) => (
  <div>
    <Navbar />
    {children}
  </div>
)

export default DefaultLayout
