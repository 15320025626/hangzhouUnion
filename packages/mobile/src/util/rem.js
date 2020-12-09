const baseSize = 1 // 注意此值要与 postcss.config.js 文件中的 rootValue保持一致
// 设置 rem 函数
function setRem () {
  // 当前页面宽度相对于 375宽的缩放比例，可根据自己需要修改,一般设计稿都是宽750(图方便可以拿到设计图后改过来)。
  const scale = document.documentElement.clientWidth / 375
  // 设置页面根节点字体大小（“Math.min(scale, 2)” 指最高放大比例为2，可根据实际业务需求调整）
  document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
  // document.documentElement.style.fontSize = baseSize * scale + 'px'

}


// 初始化
setRem();
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem();
};

// // 设置 rem 函数
// function setRem () {
//   // 320 默认大小16px; 320px = 20rem ;每个元素px基础上/16
//   const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
//   // 得到html的Dom元素
//   const htmlDom = document.getElementsByTagName('html')[0]
//   // 设置根元素字体大小
//   htmlDom.style.fontSize = htmlWidth / 3.75 + 'px'
// }
// // 初始化
// setRem()
// // 改变窗口大小时重新设置 rem
// window.onresize = function () {
//   setRem()
// }
