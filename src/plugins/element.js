import Vue from 'vue'
import {Button, Select, Loading, MessageBox, Message} from 'element-ui';

// 全局配置对象
// Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };

[Button, Select].forEach(comp => {
  Vue.use(comp)
})

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
