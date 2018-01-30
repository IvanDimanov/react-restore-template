import r2 from 'r2'

const MAX_RETURNED_RESULTS = 20

async function searchForUser (update, searchName) {
  await update('avatarStore.isSearchLoading', () => true)

  const {items = []} = await r2(`https://api.github.com/search/users?q=${searchName}`).json

  await update('avatarStore.searchUsers', () => items.slice(0, MAX_RETURNED_RESULTS))
  await update('avatarStore.userRepos', () => [])
  await update('avatarStore.isSearchLoading', () => false)
}

async function loadUserRepos (update, userName) {
  await update('avatarStore.isSearchLoading', () => true)

  const repos = await r2(`https://api.github.com/users/${userName}/repos`).json

  await update('avatarStore.userRepos', () => repos || [])
  await update('avatarStore.isSearchLoading', () => false)
}

const avatarStore = {
  searchForUser,
  loadUserRepos
}

export { avatarStore }
