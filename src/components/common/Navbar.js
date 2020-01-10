import React, { useState } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Link } from 'react-router-dom'

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
  const [count, setCount] = useState(0)
  const [menu] = useState([
    { title: 'Home', link: '/' },
    { title: 'Features', link: '/hoi-dap' },
    { title: 'Services', link: '/' },
  ])

  return (
    <NavbarWrapper>
      <Router>
        <UnorderList>
          {menu.map((item, id) => (
            <NavLink key={id}>
              <Link to={item.link}>{item.title}</Link>
            </NavLink>
          ))}
          <NavLink>{count}</NavLink>
        </UnorderList>
      </Router>
      <button type="button" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </NavbarWrapper>
  )
}
