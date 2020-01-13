import React from 'react'
import styled from 'styled-components'

const BannerContainer = styled.div`
  display: inline-block;
`

const ImageContent = styled.img`
  max-width: 100%;
  height: auto;
`

export default function Banner() {
  return (
    <BannerContainer>
      <ImageContent src="https://cdn.smobgame.com/newfolder/funtap/bn3.jpg" />
    </BannerContainer>
  )
}
