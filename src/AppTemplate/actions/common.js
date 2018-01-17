export function testCommonAction1 (update) {
  return update('test1', (test1) => ++test1)
}

export function testCommonAction2 () {
  return 2
}
