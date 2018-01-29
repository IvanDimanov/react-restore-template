async function searchForAvatar (update, searchName) {
  await update('avatarStore.isSearchLoading', () => true)
  await new Promise((resolve) => setTimeout(resolve, 2000))
  await update('avatarStore.searchName', () => `${searchName}A`)
  await update('avatarStore.isSearchLoading', () => false)
}

function clearSearch (update) {
  update('avatarStore.searchName', () => '')
}

const avatarStore = {
  searchForAvatar,
  clearSearch
}

export { avatarStore }
