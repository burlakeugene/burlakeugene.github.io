import React from 'react'
import { NavLink } from 'react-router-dom'

const index = () => {
  return (
    <div>
        <div>
        <NavLink
          to={'/'}
          activeClassName="selected"
          >
          index
        </NavLink>
        <NavLink
          to={'/about'}
          activeClassName="selected"
          >
          about
        </NavLink>
      </div>
      Here will be placed page about me, soon
    </div>
  )
}

export default index
