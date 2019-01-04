import Vue from 'vue'
import {
  Button,
  Select,
  Loading,
  MessageBox,
  Message,
  Input,
  Submenu,
  Menu,
  MenuItem,
  MenuItemGroup,
  Container,
  Aside,
  Header,
  Main,
  Footer,
  Scrollbar
} from 'element-ui';

// 全局配置对象
// Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };

[Button, Select, Input, Submenu, Menu, MenuItem, MenuItemGroup, Container, Aside, Header, Main, Footer, Scrollbar].forEach(comp => {
  Vue.use(comp)
})

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
