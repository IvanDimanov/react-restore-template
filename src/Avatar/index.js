import React, { PureComponent } from 'react'
import { connect } from 'react-restore'
import { withStyles } from 'material-ui/styles'

import TextField from 'material-ui/TextField'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

import CenteredGrid from 'common/CenteredGrid'

const styles = {
  Card: {
    display: 'inline-block',
    width: 150,
    margin: 10
  },

  CardMedia: {
    height: 200
  }
}

class Avatar extends PureComponent {
  state = {
    searchName: ''
  }

  setSearchName = (event) => {
    const { value } = event.target
    this.setState((state) => ({ ...state, searchName: value }))
  }

  renderUser = (result, index) => {
    const { classes } = this.props

    return <Card
      key={index}
      className={classes.Card}
    >
      <CardMedia
        title={`Image of ${result.login}`}
        image={result.avatar_url}
        className={classes.CardMedia}
      />

      <CardContent>
        <Typography type='headline' component='h2'>
          Lizard
        </Typography>

        <Typography component='p'>
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent>

      <CardActions>
        <Button size='small' color='primary'>
          Share
        </Button>
        <Button size='small' color='primary'>
          Learn More
        </Button>
      </CardActions>
    </Card>
  }

  render () {
    const { searchName } = this.state
    const isSearchLoading = this.store('avatarStore.isSearchLoading')
    const searchUsers = this.store('avatarStore.searchUsers')

    return <CenteredGrid>
      <TextField
        type='search'
        label='Search GitHub User'
        value={searchName}
        onChange={this.setSearchName}
        onKeyPress={(event) => event.key === 'Enter' ? this.store.avatarStore.searchForAvatar(searchName) : null}
        disabled={isSearchLoading}
        autoFocus
      />

      <br />
      <br />

      {searchUsers.length
        ? searchUsers.map(this.renderUser)
        : <Typography component='p'>No users found</Typography>
      }
    </CenteredGrid>
  }
}

const ConnectedAvatar = connect(Avatar)
export default withStyles(styles)((props) => <ConnectedAvatar {...props} />)
