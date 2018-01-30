export function setAvatar (update, avatar) {
  update('avatar', () => avatar || {})
}
