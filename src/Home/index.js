import React from 'react'
import CenteredGrid from 'common/CenteredGrid'

const Home = () => <CenteredGrid>
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
</CenteredGrid>

export default Home
