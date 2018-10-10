// 这个应该是实例化的引入
import Vue from './instance/index'
// 这个应该是初始化一些全局API
import { initGlobalAPI } from './global-api/index'
// 这个应该是从判断执行环境中的引入是否是ssr环境，是一个Boolea类型
import { isServerRendering } from 'core/util/env'
// 这个应该是virtualDom编译成renderContext的方法
import { FunctionalRenderContext } from 'core/vdom/create-functional-component'
// 这里开始执行初始化全局变量
initGlobalAPI(Vue)

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
})

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
})

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
})

Vue.version = '__VERSION__'

export default Vue
