import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavbarWrapper = styled.div`
  text-align: center;
`

const UnorderList = styled.ul`
  display: flex;
  margin: 0;
  justify-content: center;
  padding: 10px;
`

const NavLink = styled.li`
  list-style: none;
  padding: 6px 8px;
`

export default function Navbar() {
  const [menu] = useState([
    { title: 'Home', link: '/' },
    { title: 'Features', link: '/hoi-dap' },
    { title: 'Services', link: '/' },
  ])

  return (
    <NavbarWrapper>
      <UnorderList>
        {menu.map((item, id) => (
          <NavLink key={id}>
            <Link to={item.link}>{item.title}</Link>
          </NavLink>
        ))}
      </UnorderList>
    </NavbarWrapper>
  )
}
