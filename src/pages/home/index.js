import React from 'react'
import styled from 'styled-components'
import MainLayout from '../../layout/MainLayout'
import Header from '../../components/common/Header'
import Banner from '../../components/home/Banner'
import BoxQuestion from '../../components/home/BoxQuestion'

const HomeWrapper = styled.div`
  min-height: 100vh;
  display: flex;
`

const MainContent = styled.div`
  margin: 0 auto;
  max-width: 768px;
  background: #fff !important;
`

const ClearContent = styled.div`
  height: calc(64px + 48px);
`

export default function Home() {
  return (
    <MainLayout>
      <Header />
      <HomeWrapper>
        <MainContent>
          <ClearContent />
          <Banner />
          <BoxQuestion />
        </MainContent>
      </HomeWrapper>
    </MainLayout>
  )
}
