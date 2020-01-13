import React from 'react'
import styled from 'styled-components'

const MainLayout = styled.div`
  background: #e9ebee !important;
`

const DefaultLayout = ({ children }) => <MainLayout>{children}</MainLayout>

export default DefaultLayout
