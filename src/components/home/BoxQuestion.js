import React, { useState } from 'react'
import styled from 'styled-components'
import BoxTitle from './BoxTitle'

const BoxContainer = styled.div`
  display: block;
  padding-bottom: 30px;
`

const QuestionItem = styled.div`
  font-size: 14px;
  padding: 15px;
  border-bottom: 1px solid #e9ebee;
  &:last-child {
    border-bottom: 0;
  }
`

export default function BoxQuestion() {
  const [listQuestions] = useState([
    {
      title: 'Tài khoản và đăng nhập',
      questions: [
        {
          content: 'FUNID là gì?',
        },
        {
          content: 'FUNID là gì?',
        },
      ],
    },
    {
      title: 'Tài khoản và đăng nhập',
      questions: [
        {
          content: 'FUNID là gì?',
        },
        {
          content: 'FUNID là gì?',
        },
      ],
    },
  ])

  return (
    <BoxContainer>
      {listQuestions.map((cat, i) => (
        <div key={i}>
          <BoxTitle title="Tài khoản và đăng nhập" />
          {cat.questions.map((item, id) => (
            <QuestionItem key={id}>{item.content}</QuestionItem>
          ))}
        </div>
      ))}
    </BoxContainer>
  )
}
