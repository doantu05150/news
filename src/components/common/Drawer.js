import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router'
// import { Popover, OverlayTrigger } from 'react-bootstrap'
// import { IoMdMenu, IoIosSearch } from 'react-icons/io'
// import { FaRegUserCircle } from 'react-icons/fa'

const DrawerContainer = styled.div`
  display: block;
`

const BgBlur = styled.div`
  height: 100%;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  opacity: 0.8;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  overflow-y: auto;
  overflow-x: hidden;
  text-align: center;
  transition: opacity 1s;
`

const NavContent = styled.div`
  height: 100vh;
  position fixed;
  z-index: 10;
  top: 0;
  left: 0;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s;
  color: #fff;
  width: 260px;
  background: #3b889A;
`

const LinkItem = styled.div`
  transition: 0.2s;
  white-space: nowrap;
`

function Drawer(props) {
  // const [show, setShow] = useState(false)
  const { show } = props
  return (
    <DrawerContainer>
      <BgBlur />
      <aside>
        <NavContent style={{ width: show ? '100%' : '0px' }}>
          <LinkItem>
            <div>Home</div>
            <div>About</div>
          </LinkItem>
        </NavContent>
      </aside>
    </DrawerContainer>
  )
}

export default withRouter(Drawer)
