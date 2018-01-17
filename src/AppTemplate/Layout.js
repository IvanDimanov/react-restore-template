import React from 'react'
import { DevTools } from 'react-restore'
import { withStyles } from 'material-ui/styles'

import Header from './Header'

const styles = (theme) => ({
  main: theme.typography.body1
})

const Layout = ({ children, classes }) => <div className={classes.main}>
  <Header />
  {children}

  {/* Using the standard debug too from: https://www.npmjs.com/package/react-restore#enabling-devtools--time-travel */}
  {process.env.DEBUG ? <DevTools /> : null}
</div>

export default withStyles(styles)(Layout)
