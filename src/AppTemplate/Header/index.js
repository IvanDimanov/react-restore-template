import React from 'react'

import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'

import LinkButton from './LinkButton'

const Header = () => <AppBar
  position='static'
>
  <Toolbar>
    <LinkButton path='/' label='Home' />
    <LinkButton path='/avatar' label='Avatar' />
    <LinkButton path='/contacts' label='Contacts' />
    <LinkButton path='/projects' label='Projects' />
  </Toolbar>
</AppBar>

export default Header
