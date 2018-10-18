import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Home/Home'
import Course from '@/Course/Course'
import My from '@/My/My'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Course',
      name: 'Course',
      component: Course
    },
    {
      path: '/My',
      name: 'My',
      component: My
    }
  ]
})
