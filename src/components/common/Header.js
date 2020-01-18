import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router'
import { Popover, OverlayTrigger } from 'react-bootstrap'
import { IoMdMenu, IoIosSearch } from 'react-icons/io'
import { FaRegUserCircle } from 'react-icons/fa'
import Drawer from './Drawer'

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f04406;
  padding: 0 10px;
  position: fixed;
  width: 100%;
`

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  height: 64px;
  align-items: center;
`

const HeaderSearch = styled.div`
  position: relative;

  .icon-search-input {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    margin: 0 15px;
  }
`

const InputSearch = styled.input`
  height: 40px;
  border-radius: 4px;
  padding: 0 15px 0 52px;
  border: 0;
  width: 100%;
  margin-bottom: 8px;
  &:focus {
    outline-width: 0;
  }
`

const BtnLogin = styled.button`
  border: 0;
  background: transparent;
`

function PopoverCustom(history) {
  return (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Popover right</Popover.Title>
      <Popover.Content>
        <div>
          <BtnLogin
            type="button"
            onClick={() => {
              history.push('/login')
            }}
          >
            Login
          </BtnLogin>
        </div>
      </Popover.Content>
    </Popover>
  )
}

function Header({ history }) {
  const [showPopover, setShowPopover] = useState(false)
  const target = useRef(null)
  return (
    <HeaderContainer>
      <HeaderTop>
        <IoMdMenu color="#fff" size="1.8rem" />
        <OverlayTrigger
          target={target.current}
          trigger="click"
          placement="left"
          overlay={PopoverCustom(history)}
        >
          <FaRegUserCircle
            onClick={() => setShowPopover(!showPopover)}
            color="#fff"
            size="1.8rem"
            ref={target}
          />
        </OverlayTrigger>
      </HeaderTop>
      <HeaderSearch>
        <IoIosSearch className="icon-search-input" color="#bfbfbf" size="1.5rem" />
        <InputSearch placeholder="Bạn muốn hỏi gì?" />
      </HeaderSearch>
      <Drawer />
    </HeaderContainer>
  )
}

export default withRouter(Header)
