import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { GiPencilBrush } from 'react-icons/gi'
import { FiShare2 } from 'react-icons/fi'

const FormContainer = styled.div`
  padding: 10px;
`
const FormContent = styled.div`
  display: flex;
  flex-direction: column;
`

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  opacity: 0.8;
  border: 0.5px solid #cecece;
  border-bottom: 0;
  padding: 10px 15px;
`

const Title = styled.div`
  color: '#cecec';
  font-size: 0.9rem;
  text-align: left;
  font-weight: 500;
  margin-left: 8px;
`

const UITextarea = styled.textarea`
  vertical-align: middle;
  display: inline-block;
  max-width: 100%;
  width: 100%;
  padding: 10px;
  background: #fff;
  color: #666;
  border: 1px solid #e5e5e5;
  transition: 0.2s ease-in-out;
  overflow: visible;
  box-sizing: border-box;
  transition-property: color, background-color, border;
  overflow: hidden;

  &:focus {
    outline-width: 0;
  }
`
const MediaContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  background: #fff;
  padding: 10px;
`
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 15px;
  background: #f7f8f9;
  margin: 8px 0;
  overflow: hidden;
  border: 1px solid #eee;
  align-items: center;
  cursor: pointer;
  flex-basis: -webkit-calc(25% - 15px);
`
const TextButton = styled.div`
  margin-left: 5px;
  color: #555;
  white-space: nowrap;
`

export default function Home() {
  const [content, changeContent] = useState('')
  const [expanded, setExpanded] = useState(false)

  function toggleExpanded(e) {
    if (e.target.id === 'textAreaID') {
      setExpanded(true)
    } else {
      setExpanded(false)
    }
  }

  useEffect(() => {
    document.body.addEventListener('click', toggleExpanded)
    return function cleanup() {
      document.body.removeEventListener('click', toggleExpanded)
    }
  })

  function changeText(e) {
    changeContent(e.target.value)
  }

  return (
    <FormContainer>
      <FormContent>
        <TitleWrapper>
          <GiPencilBrush />
          <Title>Bài viết mới</Title>
        </TitleWrapper>
        <UITextarea
          onChange={changeText}
          placeholder="Nội dung bài viết"
          value={content}
          cols="50"
          id="textAreaID"
        />
        {(content || expanded) && (
          <MediaContainer>
            <ButtonContainer>
              <FiShare2 />
              <TextButton>Chia sẻ</TextButton>
            </ButtonContainer>
            <ButtonContainer>
              <FiShare2 />
              <TextButton>Chia sẻ</TextButton>
            </ButtonContainer>
            <ButtonContainer>
              <FiShare2 />
              <TextButton>Chia sẻ</TextButton>
            </ButtonContainer>
            <ButtonContainer>
              <FiShare2 />
              <TextButton>Chia sẻ</TextButton>
            </ButtonContainer>
          </MediaContainer>
        )}
      </FormContent>
    </FormContainer>
  )
}
