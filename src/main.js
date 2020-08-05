import Vue from 'vue'
import App from './App'
import {
  Button,
  Table,
  Select,
  Form,
  FormItem,
  Collapse,
  CollapseItem,
  Input,
  Option,
  Row,
  Col,
  TableColumn,
  Pagination,
  Dialog,
  Divider,
  DatePicker,
  Checkbox,
  Upload,
  Tree,
  Tabs,
  TabPane,


} from 'element-ui';
import router from './router'
Vue.use(Table);
Vue.use(Button);
Vue.use(Select);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Input);
Vue.use(Option);
Vue.use(Row);
Vue.use(Col);
Vue.use(TableColumn);
Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(Divider);
Vue.use(DatePicker);
Vue.use(Checkbox);
Vue.use(Upload);
Vue.use(Tree);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.config.productionTip = false

//Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
