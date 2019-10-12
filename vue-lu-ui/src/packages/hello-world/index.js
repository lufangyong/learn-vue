import LuHelloWorld from './lu-hello-world'

LuHelloWorld.install = Vue => Vue.component(LuHelloWorld.name, LuHelloWorld);

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(LuHelloWorld);
}

export default LuHelloWorld