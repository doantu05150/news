import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 10px;
  border-bottom: 1px solid #e9ebee;
  border-top: 1px solid #e9ebee;
`

const ImageSynnal = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 15px;
`

const Text = styled.div`
  font-size: 16px;
  color: #333;
`

export default function BoxTitle({ title }) {
  return (
    <TitleContainer>
      <ImageSynnal src={require('../../assets/images/h1.svg')} />
      <Text>{title}</Text>
    </TitleContainer>
  )
}

BoxTitle.propTypes = {
  title: PropTypes.string.isRequired,
}
