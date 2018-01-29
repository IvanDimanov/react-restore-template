import React, { PureComponent } from 'react'
import { connect } from 'react-restore'

import CenteredGrid from 'common/CenteredGrid'

class Avatar extends PureComponent {
  render () {
    const searchName = this.store('avatarStore.searchName')
    const isSearchLoading = this.store('avatarStore.isSearchLoading')

    return <CenteredGrid>
        Avatar page

        <br />
        <br />
        
        <h3>searchName: {searchName}</h3>

        <br />
        <br />
        <button onClick={() => this.store.avatarStore.searchForAvatar(searchName)}>
          Search
        </button>

        <br />
        <br />
        <button onClick={() => this.store.avatarStore.clearSearch()}>
          Clear
        </button>

        <br />
        <br />
        <h3>isSearchLoading: {isSearchLoading ? 'yes' : 'no'}</h3>

      </CenteredGrid>
    }
}

export default connect(Avatar)
