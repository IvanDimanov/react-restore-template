import r2 from 'r2'

const MAX_RETURNED_RESULTS = 7

async function searchForAvatar (update, searchName) {
  await update('avatarStore.isSearchLoading', () => true)

  const { items = []} = await r2(`https://api.github.com/search/users?q=${searchName}`).json

  await update('avatarStore.searchUsers', () => items.slice(0, MAX_RETURNED_RESULTS))
  await update('avatarStore.isSearchLoading', () => false)
}

const avatarStore = {
  searchForAvatar
}

export { avatarStore }
