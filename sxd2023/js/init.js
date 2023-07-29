const isMobile =
  null !=
  navigator.userAgent
    .toLowerCase()
    .match(/(ipod|ipad|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i)
if (isMobile) {
  window.location = './index.html#/mobile'
} else {
  window.location = './index.html#/index'
}
console.log('isMobile', isMobile, window.location.href)
