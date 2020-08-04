import Vue from 'vue'
import Router from 'vue-router'
import researchTask from '@/pages/researchTask/researchTask'
import demandCreativity from '@/pages/demandCreativity/demandCreativity'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'researchTask',
      component: researchTask
    },
    {
      path: '/demandCreativity',
      name: 'demandCreativity',
      component: demandCreativity
    }
  ]
})
