import LuHelloWorld from './packages/hello-world/index.js';
import LuButton from './packages/button/index.js';
import LuSelect from './packages/select/index.js';
import LuInput from './packages/input/index.js';
import LuSwitch from './packages/switch/index.js';

const components = [
  LuHelloWorld,
  LuButton,
  LuSelect,
  LuInput,
  LuSwitch
]

const install = function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  })
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  LuHelloWorld,
  LuButton,
  LuSelect,
  LuInput,
  LuSwitch
}