import React from 'react'
import styled from 'styled-components'
import MainLayout from '../../layout/MainLayout'

const HomeWrapper = styled.div`
  text-align: center;
`

export default function Home() {
  return (
    <MainLayout>
      <HomeWrapper>
        <p>this is home page</p>
      </HomeWrapper>
    </MainLayout>
  )
}
