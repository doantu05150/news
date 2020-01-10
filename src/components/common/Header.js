import React from 'react'
import styled from 'styled-components'
import { IoMdSearch, IoMdNotificationsOutline, IoMdMenu } from 'react-icons/io'
import { TiWorldOutline } from 'react-icons/ti'

const HeaderWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  background-color: #ec407a;
  padding: 8px 30px;
  align-items: center;
`
const HeaderLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  padding: 4px 10px;
  .input-search {
    margin-left: 20px;
    position: relative;
    display: flex;
    align-items: center;
    .ct-input {
      height: 32px;
      width: 300px;
      border-radius: 4px;
      border: 0;
      padding: 0 15px 0 40px;
    }
    .icon-search {
      position: absolute;
      top: 0;
      left: 7px;
      height: 100%;
    }
  }
`

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  .icon-right {
    padding: 0 6px;
  }
`

const LogoTitle = styled.div`
  color: #fff;
  font-size: 26px;
  width: 140px;
`

const AvatarCircle = styled.div`
  border-radius: 50%;
  border: 1px solid #fff;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #fff;
`

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderLeft>
        <LogoTitle>Office</LogoTitle>
        <div className="input-search">
          <IoMdSearch color="gray" size="1.4rem" className="icon-search" />
          <input className="ct-input" placeholder="tim kiem" />
        </div>
      </HeaderLeft>
      <HeaderRight>
        <TiWorldOutline color="white" size="1.6rem" className="icon-right" />
        <IoMdMenu color="white" size="1.6rem" className="icon-right" />
        <IoMdNotificationsOutline color="white" size="1.6rem" className="icon-right" />
        <AvatarCircle>T</AvatarCircle>
      </HeaderRight>
    </HeaderWrapper>
  )
}
