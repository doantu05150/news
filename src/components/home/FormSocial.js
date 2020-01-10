import React, { useState } from 'react'
import styled from 'styled-components'
import { GiPencilBrush } from 'react-icons/gi'

const FormContainer = styled.div`
  display: flex;
  padding: 15px;
  border: 0.5px solid #cecece;
`
const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  opacity: 0.8;
`

const Title = styled.div`
  color: '#cecec';
  font-size: 1rem;
  text-align: left;
  font-weight: 500;
  margin-left: 8px;
`

export default function Home() {
  const [expanded] = useState(false)
  return (
    <FormContainer>
      <TitleWrapper>
        <GiPencilBrush />
        <Title>Bài viết mới</Title>
      </TitleWrapper>
      {expanded && <p>aaa</p>}
    </FormContainer>
  )
}
