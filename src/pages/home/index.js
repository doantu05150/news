import React, { useState } from 'react'
import styled from 'styled-components'
import MainLayout from '../../layout/MainLayout'

const HomeWrapper = styled.div`
  text-align: center;
`

export default function Home() {
  const [count, setCount] = useState(0)
  return (
    <MainLayout>
      <HomeWrapper>
        <p>this is home page</p>
        <button type="button" onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </HomeWrapper>
    </MainLayout>
  )
}
