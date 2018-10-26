// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {
    Button,
    Select,
    Row,
    Col,
    Pagination,
    Table,
    TableColumn,
    Form,
    FormItem,
    Input,
    Dialog,
    Option
} from 'element-ui'

import 'element-ui/lib/theme-default/index.css'

import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
// more grace import third package !
import moment from 'moment'
import axios from 'axios'
import curvejs from 'curvejs'
Vue.config.productionTip = false
import global from './Global'

Object.defineProperty(Vue.prototype, '$moment', { value: moment });
Object.defineProperty(Vue.prototype, '$axios', { value: axios });
Object.defineProperty(Vue.prototype, '$curvejs', { value: curvejs });
Object.defineProperty(Vue.prototype, 'global', { value: global });



Vue.use(Button);
Vue.use(Select);
Vue.use(Row);
Vue.use(Col);
Vue.use(Pagination);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Dialog);
Vue.use(Option);

locale.use(lang);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
