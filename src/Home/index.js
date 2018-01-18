import React from 'react'
import { withStyles } from 'material-ui/styles'

import Grid from 'material-ui/Grid'

const Content = () => <div>
  <br />
  <h1>React Restore template</h1>
  <p>Production ready setup for React + Restore</p>
  <br />

  <h2>If you run ...</h2>
  <pre>
    <code>
      git clone git@github.com:IvanDimanov/react-restore-template.git<br />
      cd react-restore-template<br />
      npm install<br />
      npm run local-development<br />
    </code>
  </pre>
  <p>Rename <code>.env-template</code> to <code>.env</code></p>
  <br />

  <h2>... you will get</h2>
  <ul>
    <li>production webpack config with dynamic chunks - <code>npm run build</code></li>
    <li>local development server with webpack dashboard - <a href='http://localhost:8080' rel='nofollow'>http://localhost:8080</a></li>
    <li>React app with routing and Material UI v1 - <a href='https://material-ui-next.com' rel='nofollow'>https://material-ui-next.com</a></li>
    <li>Restore state management modular architecture - <a href='https://github.com/floating/restore'>https://github.com/floating/restore</a></li>
  </ul>
</div>

const styles = (theme) => ({
  GridContainer: {
    margin: theme.spacing.unit * -2
  }
})

const Home = ({ classes }) => <Grid container justify='center' className={classes.GridContainer}>
  <Grid item>
    <Content />
  </Grid>
</Grid>

export default withStyles(styles)(Home)
