import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Home/Home'
import Course from '@/Course/Course'
import My from '@/My/My'
import Comments from '@/Comments/Comments'
import Coursedetails from '@/Course/Coursedetails'

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
      path:'/Course/Coursedetails',
      name:'Coursedetails',
      component:Coursedetails
    },
    {
      path: '/My',
      name: 'My',
      component: My
    },
    {
      path: '/Comments',
      name: 'Comments',
      component: Comments
    }
  ]
})
